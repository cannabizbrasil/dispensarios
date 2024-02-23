import { useHubspotForm } from 'next-hubspot';

const HubspotDispensariosForm = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: 'dbd903b2-5fb2-4e73-960d-478e44d4ee7f',
        target: '#hubspot-form-dispensarios'
    });

    return (

        <div id="hubspot-form-dispensarios" />

    )
}

export default HubspotDispensariosForm;