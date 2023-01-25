
# QR Code Generation Microservice

QR Code Generator Microservice using Node JS, Express and qr-image.





## Demo

https://qr-code-generator-crxj.onrender.com/

## API Reference

#### Check Server Heartbeat

```http
  GET /heartbeat
```
#### Response: "QR Code Generation Microservice is working."

-----------------------------------------------------------------




#### Create QR Code

```http
  GET /qr
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `data`    | `string` | ****Required****. Any data like text, urls etc to create qr code. |
| `qrFormat`| `string` | ***Optional***. Format in which you want to generate qr. Supported Formats are *png*, *pdf*, *svg* and *eps*. **Default:** *png*|
| `responseType`      | `string` | ***Optional***. Type of the response you want to receive. Supported response types are *b64* and *media*. **Default:** *b64* |


#### Example Response (data=https://github.com/Rehankhalil462/QR-Code-Generator & qrFormat=png & responseType=b64)
```javascript
{"image":"iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACTklEQVR42u3bSW7DMBAEQP//08kxgBHR3VxkJyidEki2WJfBsId+fP2n60FDQ0NDQ0NDQ0NDQ0NDQ7Oqeby+np4LPvbzyNOLLm8E30dDQ3NQc104frl7uZjfFn3578oKaGhozmiCuhSQxvVw/I5uBTQ0NPdq0mo0bkeCloeGhuaTNcHeI1gMDQ3Nh2pS6/iR6rNv263R0NBMZp3n/npHcktDQ9ONGcOGo1rq26a4NDQ06UyjH4MGQ5E0It3Up9HQ0PQpx3i3crnAuCd5nYEkiSkNDc0RTbC2fp4ZbG3S0IOGhma7JqgoaceSJqFpCDrR2dDQ0KzMCPo6l1ao/gxUMiihoaHZrel/zxBkJStjlNk+jYaGZlJTRZBp75KOWoNV0dDQnNH0Q83xx/oZyeQslIaGZpMmKFjBGDStc/1pKBoamps1QTUaz0xXTlCnTQ0NDc1OTTXTGGcbaUxyMOWgoaGZrGnVYqrGJD0PXaWoNDQ0OzV9jlFNPIKvCo5c0tDQHNRUu5DgTVVoOdlR0dDQ7NQEM8lxO9K3QWl7Q0NDc7MmmFimlScNQatxCw0NzRlNdQiyn3ZOxh/J22hoaPZoJvOOANxvXqqxBw0NzSZNWlGC/mOcZlZnoJbmnjQ0NL0mCCODu9VvHIIZCQ0Nzc2atPIE6cW47AW1dGnuSUNDc0RzGYlURSyNUpf2NzQ0NHdoqvITxKtpwklDQ3NQk+5gqpgkWP7kJoeGhmanplpRckqxmYJM5iw0NDSbNH/2oqGhoaGhoaGhoaGhoaGhaa5vH52nVdM0r3EAAAAASUVORK5CYII="}
```


-----------------------------------------------------------------

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```



Start the server

```bash
  npm run start
```


## Tech Stack



**Server:** Node, Express

