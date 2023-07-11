FROM node:18-alpine3.16 AS dependencies

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

FROM node:18-alpine3.16 AS build

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
# generated prisma files
COPY prisma ./prisma/
COPY . .

RUN npx prisma generate
RUN yarn build
RUN npx prisma migrate resolve --rolled-back '20230710042958_adds_boolean_intro_flag_to_user'
RUN npx prisma migrate deploy

FROM node:18-alpine3.16 AS deploy

WORKDIR /app

ENV NODE_ENV production

COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]