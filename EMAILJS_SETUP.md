# Configuration EmailJS

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit (200 emails/mois)

### 2. Configurer un service email
1. Allez dans **"Email Services"** dans le dashboard
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un template email
1. Allez dans **"Email Templates"** dans le dashboard
2. Cliquez sur **"Create New Template"**
3. Configurez votre template avec les variables suivantes :

**Variables disponibles :**
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message
- `{{to_name}}` - Votre nom (optionnel)

**Exemple de template :**
```
Sujet: Nouveau message depuis votre portfolio - {{subject}}

Bonjour {{to_name}},

Vous avez reçu un nouveau message depuis votre formulaire de contact :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

4. Notez le **Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir votre Public Key
1. Allez dans **"Account"** > **"General"**
2. Copiez votre **Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurer les variables d'environnement
1. Créez un fichier `.env` à la racine du projet
2. Ajoutez les variables suivantes :

```env
REACT_APP_EMAILJS_SERVICE_ID=votre_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=votre_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=votre_public_key
```

3. Redémarrez votre serveur de développement après avoir créé/modifié le fichier `.env`

### 6. Tester le formulaire
- Remplissez le formulaire de contact
- Vérifiez que vous recevez bien l'email

## Notes importantes
- Le fichier `.env` est ignoré par Git pour des raisons de sécurité
- Ne partagez jamais vos clés publiques ou privées
- Le plan gratuit d'EmailJS permet 200 emails par mois
- Pour la production, assurez-vous d'avoir configuré les variables d'environnement sur votre plateforme de déploiement (Netlify, Vercel, etc.)
