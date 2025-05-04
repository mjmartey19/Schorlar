import type * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  phone: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, phone, message }) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", border: "1px solid #eaeaea" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#000", fontSize: "24px", margin: "0" }}>New Contact Form Submission</h1>
        <p style={{ color: "#666", fontSize: "16px" }}>From Scholar Studio Website</p>
      </div>

      <div style={{ background: "#fff", padding: "20px", borderRadius: "4px", marginBottom: "20px" }}>
        <h2 style={{ color: "#000", fontSize: "18px", marginTop: "0" }}>Contact Details</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "10px 0", borderBottom: "1px solid #eaeaea", fontWeight: "bold", width: "30%" }}>
                Name:
              </td>
              <td style={{ padding: "10px 0", borderBottom: "1px solid #eaeaea" }}>{name}</td>
            </tr>
            <tr>
              <td style={{ padding: "10px 0", borderBottom: "1px solid #eaeaea", fontWeight: "bold" }}>Email:</td>
              <td style={{ padding: "10px 0", borderBottom: "1px solid #eaeaea" }}>
                <a href={`mailto:${email}`} style={{ color: "#0070f3", textDecoration: "none" }}>
                  {email}
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px 0", borderBottom: "1px solid #eaeaea", fontWeight: "bold" }}>Phone:</td>
              <td style={{ padding: "10px 0", borderBottom: "1px solid #eaeaea" }}>{phone || "Not provided"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ background: "#fff", padding: "20px", borderRadius: "4px" }}>
        <h2 style={{ color: "#000", fontSize: "18px", marginTop: "0" }}>Message</h2>
        <p style={{ color: "#333", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px", padding: "20px", borderTop: "1px solid #eaeaea" }}>
        <p style={{ color: "#666", fontSize: "14px", margin: "0" }}>
          This email was sent from the contact form on Scholar Studio website.
        </p>
      </div>
    </div>
  </div>
)
