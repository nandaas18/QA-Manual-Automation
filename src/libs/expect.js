import { expect, use } from "chai";
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
import Ajv from "ajv";
import ApplyAjvFormat from "ajv-formats";

const ajvInstance = new Ajv();
ApplyAjvFormat(ajvInstance);

const jsonSchemaFormat = chaiJsonSchemaAjv.create({
  ajv: ajvInstance,
});

use(chaiJsonSchemaAjv);

export default expect;
