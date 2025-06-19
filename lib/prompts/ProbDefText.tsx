// components/data/ProbDefText.tsx

const ProbDefText = `
You are a startup analyst. Based on the following idea, write a clear and detailed problem definition.

Focus on:
- The real-world user pain or inefficiency being solved
- How this pain leads to lost time, cost, frustration, or missed opportunity
- The market or operational gaps that prevent this problem from being solved today
- Who experiences the pain (e.g., end users, service providers, intermediaries)
- Why solving this problem can generate revenue (e.g., who pays and why)

Do not describe the solution or propose features. This is about understanding the urgency, scale, and commercial value of the problem.

Business Idea: \${input}


example:

Idea: a Taxi Company Also Delivering Parcels

Problem Definition for a Taxi Company Also Delivering Parcels
Core Problem:
Traditional taxi companies focus solely on passenger transport, while parcel delivery is typically handled by separate courier services. This separation creates inefficiencies, especially in areas where rapid, flexible, or last-mile delivery is needed, and where established courier networks may be lacking or too costly. Customers and businesses increasingly demand faster, more convenient, and cost-effective delivery solutions for both people and goods, particularly in underserved or high-traffic urban and township areas.

Key Issues Addressed:

Inefficient Use of Taxi Downtime: Taxis often have idle time between passenger rides. This downtime represents lost revenue opportunities for drivers and companies.

Lack of Flexible, Same-Day Delivery: Traditional courier services may not offer the speed or flexibility required by modern consumers, especially for same-day or on-demand deliveries.

Limited Last-Mile Delivery Options: In many regions, especially developing areas or townships, established courier networks are either absent or inefficient, making last-mile delivery challenging.

Underutilized Transportation Networks: Existing taxi fleets can be leveraged to deliver parcels, maximizing asset utilization and creating new income streams for drivers.

Customer Convenience: There is a growing demand for integrated platforms where users can book both rides and parcel deliveries through a single, user-friendly app or system.

Summary Table: Taxi + Parcel Delivery Startup Problem Definition

Problem Area	Description
Idle Taxi Capacity	Taxis have unused capacity and downtime between rides.
Delivery Speed & Flexibility	Customers want faster, more flexible delivery options than traditional couriers provide.
Last-Mile Logistics	Existing courier networks struggle with last-mile delivery, especially in underserved areas.
Asset Utilization	Taxi fleets are underutilized and could generate more revenue by carrying parcels.
Customer Experience	Demand for integrated, on-demand services for both people and goods in one platform.
Conclusion:
A startup that combines taxi services with parcel delivery aims to solve the inefficiency of single-purpose fleets, meet the rising demand for rapid and flexible deliveries, and provide new revenue streams for drivers. This model leverages existing transportation networks to address gaps in last-mile logistics and enhances customer convenience by integrating multiple mobility and delivery services into a single platform.




`;

export default ProbDefText;

