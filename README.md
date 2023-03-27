# SimpleModal | Qlik Sense Extension

SimpleModal is a very basic Qlik Sense extension with one purpose: To provide you with a button that displays a customizable modal.

## Why?

I had a use case for one and I didn't like the options that were otherwise available to me. It was also a chance to learn how to create an extension. I had been wanting to dive into building one with Nebula so this was my opportunity.

## What are the features?

- Button settings
  - Button label
  - Button font size
- Modal settings
  - Modal title
  - Modal body
  - Option to close the modal by clicking outside of it
- Button background
  - Background color (color picker or by expression)
- Button border
  - Border on/off
  - Border corner radius
  - Border width
  - Border color (color picker or by expression)

## How to install

[Download the latest release ZIP file from the project's GitHub page](https://github.com/hurrifan1/SimpleModal/releases/latest) and then do one of the following based on your Qlik Sense product:

- Qlik Cloud
    - Go to the **Extensions** section of the Management Console, select the green **Add** button, then upload the ZIP file there.
    - If you run into problems, see the [Qlik Help page](https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Admin/mc-extensions.htm#anchor-3) for more info.
- Qlik Sense Enterprise on Windows
    - Go to the **Extensions** section of the Qlik Management Console (QMC), select the **Import** button, and then upload the ZIP file.
    - If you run into problems, see the [Qlik Help page](https://help.qlik.com/en-US/sense-admin/February2023/Subsystems/DeployAdministerQSE/Content/Sense_DeployAdminister/QSEoW/Administer_QSEoW/Managing_QSEoW/import-extensions.htm) for more info.
- Qlik Sense Desktop
    - Go to the `\Documents\Qlik\Sense\Extensions` folder and unzip the ZIP file here.
    - If you run into problems, see the [Qlik Help page](https://help.qlik.com/en-US/sense-developer/February2023/Subsystems/Extensions/Content/Sense_Extensions/Howtos/deploy-extensions.htm#anchor-1) for more info.
