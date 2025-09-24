#!/usr/bin/env python
import asyncio
import socket

HOST = "127.0.0.1"
PORT = 8888
from websockets.asyncio.server import serve


async def echo(websocket):
    async for message in websocket:
        # print(message)
        message = "You send: " + message

        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((HOST, PORT))
        msg = b"hellox\n"
        s.sendall(msg)

        await websocket.send(message)


async def main():
    async with serve(echo, "localhost", 8765) as server:
        await server.serve_forever()


if __name__ == "__main__":
    asyncio.run(main())
