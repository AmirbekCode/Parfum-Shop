// Place your bot token
// Send message "/start admin" to bot from your telegram account 
// run this file with node
// node ./scripts/bot-admin-id.js

const token = '5676806378:AAEc7i88F2u7IYRc2wl1FJ1VMOYBqAoYdPE'

const getBotUpdates = () =>
  fetch(
    `https://api.telegram.org/bot${token}/getUpdates`
  ).then((response) => response.json());

const getUserTelegramId = async (uniqueString) => {
  const { result } = await getBotUpdates();

  const messageUpdates = result.filter(
    ({ message }) => message?.text !== undefined
  );

  const userUpdate = messageUpdates.find(
    ({ message }) => message.text === `/start ${uniqueString}`
  );

  return userUpdate.message.from.id;
};

getUserTelegramId('admin').then((res) => {
    console.log(res);
})