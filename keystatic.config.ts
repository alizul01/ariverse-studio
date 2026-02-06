import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: process.env.NODE_ENV === 'production' && process.env.KEYSTATIC_GITHUB_CLIENT_ID
        ? {
            kind: 'github',
            repo: {
                owner: 'alizul01',
                name: 'ariverse-studio',
            },
        }
        : {
            kind: 'local',
        },
    collections: {
        games: collection({
            label: 'Games',
            slugField: 'title',
            path: 'src/content/games/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                coverImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/games',
                    publicPath: '/images/games/',
                }),
                platforms: fields.multiselect({
                    label: 'Platforms',
                    options: [
                        { label: 'PC', value: 'PC' },
                        { label: 'PS5', value: 'PS5' },
                        { label: 'Switch', value: 'Switch' },
                        { label: 'Xbox', value: 'Xbox' },
                        { label: 'Android', value: 'Android' },
                    ],
                }),
                engine: fields.select({
                    label: 'Engine',
                    options: [
                        { label: 'Unreal Engine 5', value: 'Unreal Engine 5' },
                        { label: 'Unity', value: 'Unity' },
                        { label: 'Godot', value: 'Godot' },
                        { label: 'Custom', value: 'Custom' },
                    ],
                    defaultValue: 'Unreal Engine 5',
                }),
                releaseDate: fields.date({ label: 'Release Date' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/games',
                        publicPath: '/images/games/',
                    },
                }),
            },
        }),
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                publishedDate: fields.date({ label: 'Published Date' }),
                coverImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/posts',
                    publicPath: '/images/posts/',
                }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/posts',
                        publicPath: '/images/posts/',
                    },
                }),
            },
        }),
        careers: collection({
            label: 'Careers',
            slugField: 'title',
            path: 'src/content/careers/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                department: fields.select({
                    label: 'Department',
                    options: [
                        { label: 'Engineering', value: 'Engineering' },
                        { label: 'Design', value: 'Design' },
                        { label: 'Art', value: 'Art' },
                        { label: 'Production', value: 'Production' },
                        { label: 'Marketing', value: 'Marketing' },
                        { label: 'Operations', value: 'Operations' },
                        { label: 'Other', value: 'Other' },
                    ],
                    defaultValue: 'Engineering',
                }),
                location: fields.text({ label: 'Location', defaultValue: 'Remote, Earth' }),
                type: fields.select({
                    label: 'Type',
                    options: [
                        { label: 'Full-time', value: 'Full-time' },
                        { label: 'Contract', value: 'Contract' },
                        { label: 'Part-time', value: 'Part-time' },
                        { label: 'Freelance', value: 'Freelance' },
                    ],
                    defaultValue: 'Full-time',
                }),
                experience: fields.select({
                    label: 'Experience Level',
                    options: [
                        { label: 'Junior', value: 'Junior' },
                        { label: 'Mid-Level', value: 'Mid-Level' },
                        { label: 'Senior', value: 'Senior' },
                        { label: 'Lead', value: 'Lead' },
                        { label: 'Director', value: 'Director' },
                    ],
                    defaultValue: 'Senior',
                }),
                status: fields.select({
                    label: 'Status',
                    options: [
                        { label: 'Active', value: 'Active' },
                        { label: 'Inactive', value: 'Inactive' },
                    ],
                    defaultValue: 'Active',
                }),
                content: fields.document({
                    label: 'Job Description',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/careers',
                        publicPath: '/images/careers/',
                    },
                }),
            },
        }),
        press: collection({
            label: 'Press Coverage',
            slugField: 'outlet',
            path: 'src/content/press/*',
            format: { data: 'json' },
            schema: {
                outlet: fields.slug({ name: { label: 'Outlet' } }),
                title: fields.text({ label: 'Title' }),
                quote: fields.text({ label: 'Quote', multiline: true }),
                screenshot: fields.image({
                    label: 'Screenshot',
                    directory: 'public/images/press',
                    publicPath: '/images/press/',
                }),
                link: fields.text({ label: 'Link' }),
                date: fields.date({ label: 'Date' }),
                isFeatured: fields.checkbox({ label: 'Featured', defaultValue: false }),
            },
        }),
        crew: collection({
            label: 'Crew',
            slugField: 'name',
            path: 'src/content/crew/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                role: fields.text({ label: 'Jabatan' }),
                photo: fields.image({
                    label: 'Foto',
                    directory: 'public/images/crew',
                    publicPath: '/images/crew/',
                }),
            },
        }),
    },
});
