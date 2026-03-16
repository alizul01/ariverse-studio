// Post-build script to restore API routes
const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, '..', 'app', 'api');
const backupDir = path.join(__dirname, '..', '.api-backup');

// Restore API routes if they were backed up
if (fs.existsSync(backupDir)) {
    console.log('Restoring API routes...');
    
    try {
        fs.renameSync(backupDir, apiDir);
        console.log('API routes restored to app/api');
    } catch (err) {
        console.error('Failed to restore API routes:', err);
        // Don't exit with error - build already succeeded
    }
}
