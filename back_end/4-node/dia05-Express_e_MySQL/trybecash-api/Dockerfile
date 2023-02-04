FROM node:16
EXPOSE 3000
# o expose serve apenas para sinalizar em qual porta rodaremos o container. a definição da porta se dá no arquivo docker-compose.yaml
WORKDIR / 
COPY package*.json
# aqui copiamos apenas o package.json e o package-lock.json, pois assim garantimos que quando as dependências forem instaladas, suas versões não vão ser alteradas.
RUN npm install
COPY ..
CMD ["bash"]