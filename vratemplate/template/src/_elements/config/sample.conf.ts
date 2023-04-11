/*-
 * #%L
 * tsproject
 * %%
 * Copyright (C) 2022 TODO: Enter Organization name
 * %%
 * TODO: Define header text
 * #L%
 */
import { Configuration } from "vrotsc-annotations";

@Configuration({
    name: "Sample Config",
    path: "TeliaCompany/VMDeployment"
})
export class SampleConfig {
    field1: string;
    field2: number;
    field3: any;
}
