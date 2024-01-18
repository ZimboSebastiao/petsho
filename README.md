# PetShop: Projeto Next.js

## Branch

### IMPORTANTE

Após instalar o `styled-components` , ative o suporte à compilação dele pelo Next.js modificando o arquivo `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
```

## Recursos utilizados

- Next.js
- API /Fake/Local
- API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e na Netlify
