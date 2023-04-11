import { PolicyTemplate } from "vrotsc-annotations";

@PolicyTemplate({
    name: "Sample Policy",
    path: "TeliaCompany/Samples",
    type: "AMQP:Subscription"
})
export class SamplePolicy {
	onMessage(self: AMQPSubscription, event: any) {
        let message = self.retrieveMessage(event);
		System.log(`Received message ${message.bodyAsText}`);
	}
}
