FROM node:slim
RUN mkdir /code2
ADD . /code2/
WORKDIR /code2/
RUN npm install
RUN npm install --only=dev
RUN npm build
EXPOSE 3000
WORKDIR /code2/frontend

CMD ["npm", "build"]
CMD ["npm", "start"]