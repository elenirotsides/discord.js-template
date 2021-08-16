import Event from '../Structures/Event.js';

export default class extends Event {
    constructor(...args) {
        super(...args, {
            once: true,
        });
    }

    run() {
        console.log(
            [
                `Logged in as ${this.client.user.tag}`,
                `Loaded ${this.client.commands.size} commands!`,
                `Loaded ${this.client.events.size} events!`,
            ].join('\n')
        );
    }
}
