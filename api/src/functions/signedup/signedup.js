import {
  //verifyEvent,
  //VerifyOptions,
  WebhookVerificationError,
} from '@redwoodjs/api/webhooks'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

// function saveJson(d) {
//   db.jsonResponse.create({
//     data: { jsonTxt: d.stringify() },
//   })
//   return
// }

export const handler = async (event) => {
  const vercelInfo = { webhook: 'vercel' }
  const webhookLogger = logger.child({ vercelInfo })

  webhookLogger.trace('Invoked vercelWebhook function')

  var errorData = 'error data'
  try {
    // const options = {
    //   signatureHeader: 'x-vercel-signature',
    // }
    var payload
    var returnMessage = 'Received Event'
    returnMessage = 'Received, but IS Encoded'
    const encodedPayload = event.body
    //only the event's body is encoded payload is that body decoded returned
    payload = Buffer.from(encodedPayload, 'base64').toString('utf8')
    returnMessage = 'Received, but WAS Encoded'
    payload = JSON.parse(payload)
    returnMessage = 'Received, but WAS JSON'

    // if (event.isBase64Encoded) {
    //   returnMessage = 'Received, but IS Encoded'
    //   const encodedPayload = event.body
    //   //only the event's body is encoded payload is that body decoded returned
    //   payload = Buffer.from(encodedPayload, 'base64').toString('utf8')
    //   returnMessage = 'Received, but WAS Encoded'
    //   payload = JSON.parse(payload)
    //   returnMessage = 'Received, but WAS JSON'
    // }
    // if (!event.isBase64Encoded) {
    //   //not encoded body so just parse
    //   payload = JSON.parse(payload)
    //   returnMessage = 'Received, NOW is Parsed'
    // }
    try {
      // returnMessage = JSON.stringify(payload)
      const eyedee = payload.data.id
      // returnMessage = 'Received, made through to data access: id'

      const eeemail = payload?.data?.email_addresses[0]?.email_address
      // returnMessage = 'Received, made through to data access: email'

      const first = payload?.data?.first_name

      const userName = payload?.data?.username
      // returnMessage = 'Received, made through to data access'

      // if (eyedee == null) {
      //   returnMessage = 'null id'
      // }

      if (eyedee != null) {
        returnMessage = eyedee
        await db.user.create({
          data: {
            thirdPartyID: eyedee,
            email: eeemail,
            firstName: first,
            username: userName,
          },
        })

        // returnMessage = 'Fetched data stored in clerkUser'
      }
    } catch (error) {
      return {
        statusCode: 405, // An error
        body: JSON.stringify({
          error: returnMessage,
        }),
      }
    }

    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 200,
      body: JSON.stringify({
        data: returnMessage,
        // shipNotifyHook,
      }),
    }
    // verifyEvent('sha256Verifier', {
    //   event,
    //   secret: 'kuJaHp5bzXCFbCiCyjxlOQ6E',
    //   options,
    // })
    // webhookLogger.debug({ headers: event.headers }, 'Headers')
    // webhookLogger.debug({ payload }, 'Body payload')
    // // Safely use the validated webhook payload
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      //webhookLogger.warn('Unauthorized')
      webhookLogger.warn(returnMessage)
      return {
        statusCode: 401,
        body: JSON.stringify({
          data: errorData,
        }),
      }
    } else {
      //webhookLogger.error({ error }, error.message)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 500,
        body: JSON.stringify({
          error: errorData,
        }),
      }
    }
  }
}
