# Chat w/ WebSocket + Node + Create React App + Docker Compose

A project that runs a Node server and a create-react-app app via two separate containers, using Docker Compose.
Then render a chat widget with an open `ws` connection to show in real time new messages and notifications.

## Development

```
docker-compose up
```

For development, the `server/` and `client/` directories have their own docker containers, which are configured via the `docker-compose.yml` file.

The client server is spun up at `localhost:3000` and it proxies internally to the server using the linked name as `server:4000`.

The local directories are mounted into the containers, so changes will reflect immediately. However, changes to package.json will likely need to a rebuild: `docker-compose down && docker-compose build && docker-compose up`.
