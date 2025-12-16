import { useState } from "react";

export default function JobConnect() {
  const [role, setRole] = useState("seeker");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ fontFamily: "Arial", padding: 30 }}>
      <h1 style={{ textAlign: "center" }}>JobConnect</h1>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <button onClick={() => setRole("seeker")}>Job Seeker</button>
        <button onClick={() => setRole("employer")} style={{ marginLeft: 10 }}>
          Employer
        </button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: 20, maxWidth: 400, margin: "0 auto" }}>
        {role === "seeker" && (
          <>
            <h2>Find a Job</h2>
            <p>Message employers with a monthly subscription.</p>
            <p><b>CHF 19 / month</b></p>
          </>
        )}

        {role === "employer" && (
          <>
            <h2>Hire Talent</h2>
            <p>Contact job seekers with a monthly subscription.</p>
            <p><b>CHF 49 / month</b></p>
          </>
        )}

        {!subscribed ? (
          <button onClick={() => setSubscribed(true)} style={{ width: "100%", marginTop: 10 }}>
            Subscribe
          </button>
        ) : (
          <p style={{ color: "green" }}>Subscription active</p>
        )}
      </div>

      <div style={{ maxWidth: 400, margin: "30px auto", border: "1px solid #ccc", padding: 20 }}>
        <h3>Messages</h3>
        {subscribed ? (
          <>
            <input placeholder="Type message" style={{ width: "100%", marginBottom: 10 }} />
            <button style={{ width: "100%" }}>Send</button>
          </>
        ) : (
          <p>You must subscribe to send messages.</p>
        )}
      </div>
    </div>
  );
}
