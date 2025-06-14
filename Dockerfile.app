FROM node:18

WORKDIR /app

COPY APP /app

RUN npm install express sequelize pg pg-hstore

CMD ["node", "index.js"]
