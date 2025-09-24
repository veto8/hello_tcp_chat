#!/usr/bin/env python
import asyncio
import websockets

TCP_HOST = "127.0.0.1"
TCP_PORT = 8888  # Your raw TCP chat server
WS_HOST = "0.0.0.0"
WS_PORT = 8765  # WebSocket port


async def handle_websocket(websocket):
    # Connect to the TCP backend
    reader, writer = await asyncio.open_connection(TCP_HOST, TCP_PORT)

    async def tcp_to_ws():
        try:
            while True:
                data = await reader.read(1024)
                if not data:
                    break
                await websocket.send(data.decode(errors="ignore"))
        except Exception:
            pass

    async def ws_to_tcp():
        try:
            async for message in websocket:
                writer.write(message.encode())
                await writer.drain()
        except Exception:
            pass

    tasks = [asyncio.create_task(tcp_to_ws()), asyncio.create_task(ws_to_tcp())]

    await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
    writer.close()
    await writer.wait_closed()


async def main():
    async with websockets.serve(handle_websocket, WS_HOST, WS_PORT):
        print(f"WebSocket proxy running at ws://{WS_HOST}:{WS_PORT}")
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())
