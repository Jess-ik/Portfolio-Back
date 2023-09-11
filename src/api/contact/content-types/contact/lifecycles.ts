export async function afterCreate(event: any): Promise<void> {
    const { result } = event;
  
    try {
      await strapi.plugins.email.services.email.send({
        to: 'jessica.louvel@gmail.com',
        from: 'contact@jess-louvel.com',
        replyTo: `${result.email}`,
        subject: `Nouvelle demande de contact de ${result.name} sur jess-louvel`,
        text: `${result.message}`,
      });
    } catch (err) {
      console.log(err);
    }
  }