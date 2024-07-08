# Utiliser une image de base Node.js
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port (si l'application en a besoin)
EXPOSE 8080

# Commande par défaut pour exécuter l'application
CMD ["node", "src/calculator.js"]
