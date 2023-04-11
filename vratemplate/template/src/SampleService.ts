import { Logger } from "com.vmware.pscoe.library.ts.logging/Logger";

export interface SampleModel {
    id: number;
    displayName: string;
}

/**
 * SampleService.ts is located directly in the src folder of the project. This
 * gives the shortest possble fully qualified name. Consumers of SampleService uses
 * following import statement:
 * 
 * import { SampleService, SampleModel } from "net.teliacompany.prc.aa.sample-ts-project/SampleService"
 */
export class SampleService {

	private readonly logger: Logger;

	constructor() {
		this.logger = Logger.getLogger(this.constructor.name);
	}

    /**
     * Gets all items
     * 
     * @returns {Array<SampleModel>} An array of items
     */
	getAll(): Array<SampleModel> {
		this.logger.info(`Getting all items`);
        let items: Array<SampleModel> = [
            { id: 1, displayName: "Item 1" },
            { id: 2, displayName: "Item 2" },
            { id: 3, displayName: "Item 3" }
        ];

		return items;
	}

    /**
     * Gets item by id
     * 
     * @param {string} id The id of the item to get
     * 
     * @returns {SampleModel} The item
     */
	get(id: number): SampleModel {
		this.logger.info(`Getting item by id: ${id}`);
        return this.getAll().find((item) => item.id === id);
	}
}
