/**
 * contact controller
 */

import { factories } from '@strapi/strapi'
const axios = require('axios');

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
    async create(ctx) {
        // Récupérer les données du formulaire soumis par l'utilisateur

        try {
            const { name,
                email,
                message
            } = ctx.request.body.data;
            const {recaptcha} = ctx.request.body;
            console.log(recaptcha)

            // Vérifier la clé reCAPTCHA
            const secretKey = process.env.RECAPTCHA_SECRET_KEY;
            console.log(secretKey)

            console.log(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`);
            const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`);
            const { success } = response.data;
            console.log(response)
            if (!success) {
                // La vérification de la clé reCAPTCHA a échoué
                ctx.response.status = 400;
                ctx.response.body = { message: "Le test de reCAPTCHA a échoué. Veuillez réessayer." };
                return;
            }




            await super.create(ctx);

            // Retourner une réponse de succès
            ctx.response.status = 200;
            ctx.response.body = { message: "Votre message a été envoyé avec succès." };


               await strapi.plugins['email'].services.email.send({
                  to: email,
                   from: 'contact@jess-louvel.com', // e.g. single sender verification in SendGrid
                   subject: "Your request on jess-louvel.com",
                   text: message, // Replace with a valid field ID:
                  html: 'Hi ' + name + ',<br/>Your message via jess-louvel.com contact form has been received.<br/>I will make sure to get back to you shortly.<br/><br/>Thank you for reaching out! <br/><br/>Best regards,<br/><br/>Jessica Louvel<br/>Front-end Developper<br/><a href="https://jess-louvel.com">https://jess-louvel.com</a><br/>____________<br/>Your message:<br/><br/><em>' + message + '<em>', 
                  
                 })

            await strapi.plugins['email'].services.email.send({
                to: 'jessica.louvel@gmail.com',
                from: 'contact@jess-louvel.com', // e.g. single sender verification in SendGrid
                subject: "Nouveau message sur jess-louvel",
                text: message, // Replace with a valid field ID:
                html: 'Nouvelle demande de contact depuis jess-louvel.com: <br/><ul><li>Nom: ' + name + '</li><li>Email: ' + email + '</li><li>message: ' + message + '</li>',

            })
            return;
        } catch (error) {
            // Retourner une réponse d'erreur

            ctx.response.status = 500;


            if (error.name && error.name == "ValidationError") {

                ctx.response.body = { message: "Le champ: " + error.details.errors[0].path + " n'a pas été saisie correctement" };
            }
            else {
                ctx.response.body = { message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard ou utiliser l'adresse mail contact@fytech58.fr" };

            }


            return;
        }


    },




}));

