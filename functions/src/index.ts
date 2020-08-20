// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();
const email = 'cullyn@cullyn.io'

// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const newContact = functions.firestore.document('contacts/{contactID}/').onCreate( async (change, context) => {
    
    const contactSnap = await db.collection('contacts').doc(context.params.contactId).get();

    const contact = contactSnap.data() || {};

    const msg = {
        to: email,
        from: 'contact@cullyn.io',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: `New contact from ${contact.name}`,
            preheader: `From ${contact.email}`,
            name: contact.name,
            message: contact.message,
            email: contact.email
        },
    };

    return sgMail.send(msg);
});