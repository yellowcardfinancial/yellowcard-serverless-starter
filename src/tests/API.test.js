import * as handler from '../api';

test('Internal request test', async () => {
    const event = {
        body: JSON.stringify({
            id: 'cdrt789okj-kij87yt6-z4e567',
            name: 'item'
        })
    };
    const context = 'context';
    const callback = (error, response) => {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe("string");
    };

    await handler.saveItem(event, context, callback);
});