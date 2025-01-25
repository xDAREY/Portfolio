export async function fetchIpDetails() {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) {
      throw new Error("Failed to fetch IP details");
    }
    return await response.json();
  }
  
  export async function sendIpDetails({ formId }: { formId: string }) {
    const ipDetails = await fetchIpDetails();
  
    await fetch(`https://submit-form.com/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "Portfolio Visit",
        timestamp: new Date().toISOString(),
        ip: ipDetails.ip,
        city: ipDetails.city,
        region: ipDetails.region,
        country: ipDetails.country_name,
        device: navigator.userAgent,
      }),
    });
  }
  