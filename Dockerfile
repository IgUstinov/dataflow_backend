FROM node:20.18.0 as build
WORKDIR /backend-build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20.18.0
WORKDIR /backend
COPY --from=build /backend_build/dist ./dist
COPY package*.json ./
RUN npm install --only=production
CMD ["node", "dist/app.js"]