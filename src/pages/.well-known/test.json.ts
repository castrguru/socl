export async function GET({ request }) {
    // Process the URL into a more usable format
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);

    // Set up a response object
    const data = {
      url: url,
      hostname: url.hostname,
      hello: params.get('hello'),
    };

    // This will yield { hello: 'meow' } on your Astro server console
    console.log(data)

    /* Set headers. */
    const headers = {
        'content-type': 'application/json',
    }

    // Return the response
    return new Response(JSON.stringify(data), {
      headers,
      status: 200,
    })
}
