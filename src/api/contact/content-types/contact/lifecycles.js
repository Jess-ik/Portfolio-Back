module.exports = {
    async afterCreate(event) {    
        const  { result } = event;

        try{
            await strapi.plugins.email.services.email.send({
              to: 'jessica.louvel@gmail.com',
              from: 'contact@jess-louvel.com', // e.g. single sender verification in SendGrid
              replyTo: '${result.email}',
              subject: 'Nouvelle demande de contact de ${result.name} sur jess-louvel',
              text: '${result.message}', // Replace with a valid field ID
             
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}


