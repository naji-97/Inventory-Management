# Use Node.js image
FROM node:20-alpine

WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy prisma files
# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy rest of backend
COPY . .

# If using TypeScript, add build step:
RUN npm run build

EXPOSE 4000
CMD ["npm", "start"]
