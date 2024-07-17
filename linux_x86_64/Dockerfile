
#? 👇 Stage 1
#* 👇 Yah donon ka koi bhi Ek use karne se kam Karega
# FROM --platform=linux/x86_64 node:20 as builder    #* 👈 yah code ko bhi use kar sakte hain
FROM --platform=linux/amd64 node:20 as builder

WORKDIR /build

COPY package*.json .
RUN npm install

COPY src/ src/
COPY tsconfig.json tsconfig.json

RUN npm run build



#? 👇 Stage 2
#* 👇 Yah donon ka koi bhi Ek use karne se kam Karega
# FROM --platform=linux/x86_64 node:20 as builder    #* 👈 yah code ko bhi use kar sakte hain
FROM --platform=linux/amd64 node:20 as runner

WORKDIR /app

COPY --from=builder build/package*.json .
COPY --from=builder build/node_modules node_modules/
COPY --from=builder build/dist dist/

EXPOSE 8000

CMD [ "npm", "start" ]