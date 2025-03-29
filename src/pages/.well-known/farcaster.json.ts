export function GET(request) {
    /* Set URL. */
    const url = new URL(request.url)
// console.log('URL', url)

    /* Set hostname. */
    const hostname = url.hostname
// console.log('HOSTNAME', hostname)

    /* Build data package. */
    const data = {
        DEBUG: 'TESTING SOCLSITE MANIFEST GENERATION',
        hostname,
        accountAssociation: {
            header: 'eyJmaWQiOjk1NzM2MCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDMxZTQ5MDhlNEYxNzA3ZTBjMDhCNTQwOTYyOUU2YWZlN0Y4NERGYzcifQ',
            payload: 'eyJkb21haW4iOiJzb2NsLnNpdGUifQ',
            signature: 'MHgzMjg4MjQ2NGUxN2NkYzhmZTAyYjAzYzM3NWUxMmI1YzRiOWFmZDQxNDJmMWEwMDdhMjNmMWQxZWIwZDRhNjFiNTYxNTFlMTYwMDE3MDZjZDNlYjNmM2JiOGNhOTNmNzc0ZGJjOTI5OWU5NzMyYzk3OGM3MWY3NjE0YmQxMzM1MjFj'
        },
        frame: {
            version: '1',
            name: 'Soclsite',
            iconUrl: 'https://socl.site/icon-bg.png',
            homeUrl: 'https://socl.site',
            imageUrl: 'https://socl.site/banners/farcaster-framing.png',
            buttonTitle: '「 ✦ Soclsite YOUR Website ✦ 」',
            splashImageUrl: 'https://socl.site/splash.gif',
            splashBackgroundColor: '#a728b1',
            webhookUrl: 'https://castr.guru/webhook/soclsite'
        }
    }

    /* Set headers. */
    const headers = {
        'content-type': 'application/json',
    }

    /* Return JSON data. */
    return new Response(
        JSON.stringify(data),
        { headers },
    )
}
