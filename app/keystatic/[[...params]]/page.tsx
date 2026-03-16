import KeystaticApp from './keystatic';

// Required for static export with optional catch-all routes
export function generateStaticParams() {
    return [{ params: [] }];
}

export default function Page() {
    return <KeystaticApp />;
}
