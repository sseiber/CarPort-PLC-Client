FROM arm64v8/alpine:3

RUN apk add --no-cache \
    nodejs \
    npm \
    && rm -rf /var/cache/apk/*

ENV WORKINGDIR /app
WORKDIR ${WORKINGDIR}

ADD package.json ${WORKINGDIR}/package.json
ADD .eslintrc.json ${WORKINGDIR}/.eslintrc.json
ADD tsconfig.json ${WORKINGDIR}/tsconfig.json
ADD setup ${WORKINGDIR}/setup
ADD .scripts ${WORKINGDIR}/.scripts
ADD webpackconfigs ${WORKINGDIR}/webpackconfigs
ADD assets ${WORKINGDIR}/assets
ADD src ${WORKINGDIR}/src

RUN npm install -q && \
    npm run build && \
    npm run eslint && \
    npm prune --production && \
    rm -rf src

EXPOSE 8100 

CMD ["npm ","start"];