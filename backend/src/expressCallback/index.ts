const makeExpressCallback = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            ...req,
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent')
            }
        }

        try {
            const httpResponse = await controller(httpRequest)
            if (httpResponse.headers) {
                res.set(httpResponse.headers)
            }
            res.type('json')
            res.status(httpResponse.statusCode || 200).send(httpResponse.body)
        } catch (e) {
            console.log(e)
            res.json(e.body, e.status)
        }
    }
}

export default makeExpressCallback