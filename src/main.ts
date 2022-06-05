import { PlayerChatEvent, ServerCommands, ServerEvents } from '@customrealms/core';


ServerCommands.register(`/myuuid`, (player, call) => {
    const uuid = player.getUUID();

    player.sendMessage(`Your uuid is ${uuid}`);
})
