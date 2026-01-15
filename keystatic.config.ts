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
    },
});
