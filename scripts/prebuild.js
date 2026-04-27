// Pre-build script to handle API routes for static export
const fs = require('fs');
const path = require('path');

const isServerDeployment = !!process.env.KEYSTATIC_GITHUB_CLIENT_ID;
const apiDir = path.join(__dirname, '..', 'app', 'api');
const backupDir = path.join(__dirname, '..', '.api-backup');

// Only remove API routes for static export (no GitHub OAuth)
if (!isServerDeployment) {
    console.log('Static export detected: Removing API routes for build...');

    if (fs.existsSync(apiDir)) {
        // Move API directory to backup location
        try {
            fs.renameSync(apiDir, backupDir);
            console.log('API routes backed up to .api-backup');
        } catch (err) {
            console.error('Failed to backup API routes:', err);
            process.exit(1);
        }
    } else if (fs.existsSync(backupDir)) {
        console.log('API routes already backed up');
    }

    // Clear stale Next.js type declarations that reference the removed API routes.
    // Without this, TypeScript type-checks cached route types from a previous dev
    // run and fails because the route files no longer exist.
    const staleDirs = [
        path.join(__dirname, '..', '.next', 'types'),
        path.join(__dirname, '..', '.next', 'dev', 'types'),
        path.join(__dirname, '..', 'dist', 'types'),
        path.join(__dirname, '..', 'dist', 'dev', 'types'),
    ];
    for (const dir of staleDirs) {
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true, force: true });
            console.log(`Cleared stale type cache: ${dir}`);
        }
    }
} else {
    console.log('Server deployment detected: Keeping API routes');
}
