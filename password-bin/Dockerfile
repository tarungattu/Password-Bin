FROM node:22.19-alpine

# good practice to run app as a non-root user
# -S -> creates system user
# -G -> adds user to a group
#  done to avoid running app as root
# if app is run as root, people might be able to gain access t host system
RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

# copy package.json and package.lock.json before copying other files
COPY package*.json ./

# change the ownership of the files to root user
USER root

# change ownership of /app directory to app user
# chown -R <user>:<group> <directory>
# chown changes user/group ownership of the file
RUN chown -R app:app .

# change ownership back to user
USER app

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev
