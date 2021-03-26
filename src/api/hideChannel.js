import agent from '../structures/agent';

const hideChannel = async (profile, channel, hide) => {
  'use strict';

  const response = await agent(
    '/hide_channel',
    {
      body: {
        channel: channel || null,
        hide: hide,
      },
    },
    profile
  );
  const data = await response.json();

  return data;
};

export default hideChannel;

export const specification = {
  success: Boolean,
};
