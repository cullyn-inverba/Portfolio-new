// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as sgMail from '@sendgrid/mail';

admin.initializeApp();
const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const newContact = functions.firestore.document('contacts/{contactID}').onCreate( async (change) => {

    const contact = change.data() || {};

    const msg = {
        to: `cullyn.newman@gmail.com`,
        from: `cullyn@cullyn.io`,
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