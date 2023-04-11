# Sample vRBT Typescript project

This is a sample project with a modified folder structure, compared to the
structure that mvn archetype:generate creates.

The modified structure is optimized for shortest possible module names for vRO Actions.

# Folder structure

**src**

Mandatory root folder for Typescript source code

**src/_elements**

Mandatory folder for all vRO element types but Actions.

**src/_elements/config**

Optional folder for vRO Configuration elements, can be deleted if vRO Configuration elements
are not used.

**src/_elements/policies**

Optional folder for vRO Policy elements, can be deleted if vRO Policy elements
are not used.

**src/_elements/resources**

Optional folder for vRO Resource elements, can be deleted if vRO Resource elements
are not used.

**src/_elements/types**

Optional folder for vRO Types, can be deleted if not used.

**src/_elements/workflows**

Optional folder for vRO Workflow elements, can be deleted if vRO Workflow elements
are not used.

**src/xxx**, 
**src/xxx/yyy**

All other folders under __src__ contains vRO Actions. Any folder name can be used. The folder names
become part of vRO Action module names when the project is built.

* net.teliacompany.prc.aa.sample-ts-project.xxx
* net.teliacompany.prc.aa.sample-ts-project.xxx.yyy
