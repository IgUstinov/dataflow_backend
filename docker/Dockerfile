FROM node:20.18.0 AS build
WORKDIR /app
COPY ../package*.json ./
RUN npm install
COPY .. .
RUN npm run build

FROM node:20.18.0
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY ../package*.json ./
RUN npm install --only=production
CMD ["npm", "run", "start:dev"]