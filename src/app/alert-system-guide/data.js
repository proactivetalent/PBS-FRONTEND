// Alert System Guide Data
// Custom-built alert system guides instead of WordPress CMS
import { API_URL } from "@/config";

export const alertSystemGuides = [
  {
    id: 1,
    title: "PBS Sign Up & Account Setup Guide",
    excerpt: "A quick walkthrough to help you create your PBS account and get fully set up in minutes — from registration to your first login.",
    slug: "understanding-pbs-alert-system",
    date: "January 15, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide1/thumbnail.webp",
    image1: "/PBS Assets/alertguide/guide1/intro.webp",
    author: "PBS Team",
    modified: "2025-01-15",
    layout: "first", // Layout type: default, minimal, hero-focus, split-view, timeline
    modules: {
      introduction: {
        heading: "Introduction",
        paragraphs: [
          "The PBS Alert System is a proactive compliance and property intelligence platform designed for the New York City real estate landscape. It provides stakeholders with real-time monitoring of over 45 city agency datasets, delivering instant alerts on violations, inspections, permits, and zoning changes. This guide provides a systematic, step-by-step procedure for registering and initializing your account to begin leveraging the PBS platform.",
          "Upon successful completion of this setup process, users will have full access to the PBS Member Portal, the central hub for all property data, agency communications, and remediation services."
        ]
      },
      prerequisites: {
        heading: "Prerequisites",
        paragraphs: [
          "• A valid and frequently accessed corporate or personal email address.",
          "• Your primary contact information is readily available.",
          "• The authority to create an account on behalf of your entity."
        ]
      },
      features: {
        heading: "Account Creation Procedure",
        desc: "The account creation process is a sequential, four-step workflow designed for efficiency and security.",
        steps: [
          {
            title: "Step 1: Complete the Registration Form",
            icon: "/PBS Assets/alertguide/guide1/reg_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide1/step1.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Navigate to the official PBS.NYC registration portal."
              },
              {
                text: "The registration form will prompt you for the following required fields:",
                subpoints: [
                  "Full Name: The primary contact for the account.",
                  "Email Address: This will serve as your unique username and primary channel for system communication.",
                  "Physical Address: Your organization's mailing address.",
                  "Phone Number: A direct contact number."
                ]
              },
              {
                text: "Establish a secure password adhering to the system's complexity requirements."
              },
              {
                text: "Review all entered information for accuracy."
              },
              {
                text: "Initiate the account creation by clicking the \"Register\" button."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Step 2: Email Verification and Account Confirmation",
            icon: "/PBS Assets/alertguide/guide1/mail_icon.png",
            description:
              "",
            // banner: {
            //   src: "",
            //   containerClass: "flex h-[80px] w-[316px] flex-col items-center justify-center my-auto rounded-3xl bg-[linear-gradient(0deg,rgba(138,213,183,0.1)_0%,rgba(138,213,183,0.01)_100%),linear-gradient(90deg,rgba(138,213,183,0.1)_0%,rgba(138,213,183,0)_35%,rgba(138,213,183,0)_65%,rgba(138,213,183,0.1)_100%)] backdrop-blur-lg shadow-[0_8px_32px_rgba(138,213,183,0.15)] border border-white/10",
            //   imageClass: "w-[290px] h-[60px] object-contain"
            // },
            // illustration: {
            //   src: "/PBS Assets/alertguide/register.png",
            //   containerClass: "mx-auto flex h-[220px] w-[450px] items-center justify-center my-auto rounded-3xl bg-[linear-gradient(0deg,rgba(138,213,183,0.1)_0%,rgba(138,213,183,0.01)_100%),linear-gradient(90deg,rgba(138,213,183,0.1)_0%,rgba(138,213,183,0)_35%,rgba(138,213,183,0.1)_100%)] backdrop-blur-lg shadow-[0_8px_32px_rgba(138,213,183,0.15)] border border-white/10",
            //   imageClass: "w-[255px] h-[275px] object-contain opacity-0"
            // },
            banner: {
              src: "/PBS Assets/alertguide/guide1/step2.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Following the registration request, access the inbox of the email address you provided."
              },
              {
                text: "Locate an automated email from PBS Alert System with the subject line \"Verify Your PBS Account\"."
              },
              {
                text: "Open the email and review the details. This message serves as both a verification request and a confirmation of the account details submitted in the registration form."
              },
              {
                text: "Click the verification link within the email to activate your account. This step is mandatory to ensure the security and validity of your email address."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Step 3: Initial Login and Portal Access",
            icon: "/PBS Assets/alertguide/guide1/login_icon.png",
            description:
              "",
            // banner: {
            //   src: "/PBS Assets/alertguide/login.png",
            //   containerClass: "flex h-[190px] w-[230px] flex-col items-center justify-center my-auto rounded-3xl bg-[linear-gradient(0deg,rgba(138,213,183,0.12)_0%,rgba(138,213,183,0.02)_100%),linear-gradient(90deg,rgba(138,213,183,0.12)_0%,rgba(138,213,183,0)_35%,rgba(138,213,183,0)_65%,rgba(138,213,183,0.12)_100%)] backdrop-blur-lg shadow-[0_10px_40px_rgba(138,213,183,0.2)] border border-white/10",
            //   imageClass: "w-[200px] h-[160px] object-contain"
            // },
            // illustration: {
            //   src: "/PBS Assets/alertguide/dashboard.png",
            //   containerClass: "flex h-[200px] w-[370px] items-center justify-center my-auto rounded-3xl bg-[linear-gradient(0deg,rgba(138,213,183,0.12)_0%,rgba(138,213,183,0.02)_100%),linear-gradient(90deg,rgba(138,213,183,0.12)_0%,rgba(138,213,183,0)_35%,rgba(138,213,183,0)_65%,rgba(138,213,183,0.12)_100%)] backdrop-blur-lg shadow-[0_10px_40px_rgba(138,213,183,0.2)] border border-white/10",
            //   imageClass: "w-[345px] h-[175px] object-contain"
            // },
            banner: {
              src: "/PBS Assets/alertguide/guide1/step3.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Once your email is verified, proceed to the PBS Member Login Portal."
              },
              {
                text: "Enter your credentialed Email Address and Password in the designated fields."
              },
              {
                text: "Click \"Login\". You will be granted access to your personalized PBS Member Portal dashboard."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Step 4: Property Portfolio Initialization",
            icon: "/PBS Assets/alertguide/guide1/property_icon.png",
            description:
              "The final step to activating the PBS Alert System for your assets is to populate your portfolio.",
            banner: {
              src: "/PBS Assets/alertguide/guide1/step4.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Within the PBS Member Portal, navigate to the \"Properties\" section"
              },
              {
                text: "Use the integrated tools to add your properties individually via address or BIN."
              }
            ]
            ,
            footer:
              "Upon successful addition of your first property, the system's 24/7 monitoring engine will activate, and you will begin receiving alerts and insights. For detailed instructions on adding and managing properties, please refer to the separate guide: \"PBS Alert System: Managing Your Property Portfolio & Profile\""
          }
        ]
      },
      serviceTiers: {
        heading: "Service Tiers and Post-Login Activation",
        subheading: "Important Note on Service Tiers:",
        paragraphs: [
          "The PBS platform operates on a dual-tier service model. Understanding this distinction is a crucial for leveraging the system's full capabilities."
        ]
      },
      conclusion: {
        heading: "Conclusion",
        paragraphs: [
          "By completing this four-step process, you have successfully registered for the PBS Alert System and gained access to a powerful tool for managing NYC property compliance. The platform is designed to provide peace of mind through proactive monitoring and, with membership, seamless issue resolution."
        ]
      },
      gettingStarted: {
        heading: "Account Creation Procedure",
        desc: "The account creation process is a sequential, four-step workflow designed for efficiency and security.",
        subheading: "Step 2: Email Verification and Account Confirmation",
        items: [
          {
            text: "Following the registration request, access the inbox of the email address you provided."
          },
          {
            text: "Locate an automated email from PBS Alert System with the subject line 'Verify Your PBS Account'",
          },
          {
            text: "Open the email and review the details. This message serves as both a verification request and a confirmation of the account details you submitted in Step 3.1.",
          },
          {
            text: "Click the verification link within the email to activate your account. This step is mandatory to ensure the security and validity of your email address."
          },
        ],

      }
    }
  },
  {
    id: 2,
    title: "User Profile & Property Setup",
    excerpt: "Learn how to complete your user profile and add your first property so PBS can deliver accurate alerts and compliance updates.",
    slug: "add-manage-properties",
    date: "January 20, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide2/thumbnail.webp",
    author: "PBS Team",
    modified: "2025-01-20",
    layout: "second", // Different layout for this guide
    modules: {
      introduction: {
        heading: "Introduction",
        paragraphs: [
          "Welcome to the PBS Member Portal, your centralized dashboard for property compliance and intelligence in New York City. This guide provides a concise overview of the portal's core features to get you operational quickly. The interface is designed for clarity, enabling you to manage your profile, portfolio, and alerts with maximum efficiency.",
          "Prerequisite: This guide assumes you have successfully completed the registration process outlined in the PBS alert system: Sign Up and Account Setup Guide."
        ]
      },
      prerequisites: {
        heading: "Core Dashboard Navigation",
        intro: "Your primary navigation is located on the Dashboard's upper tab, providing access to all key features.",
        paragraphs: [
          "• A valid and frequently accessed corporate or personal email address.",
          "• Your primary contact information is readily available.",
          "• The authority to create an account on behalf of your entity."
        ],
        title1: "Property List",
        icon1: "/PBS Assets/alertguide/guide2/list_icon.png",
        title2: "Manage Properties",
        icon2: "/PBS Assets/alertguide/guide2/manage_icon.png",
        title3: "Property Summary",
        icon3: "/PBS Assets/alertguide/guide2/summary_icon.png",
        title4: "Settings",
        icon4: "/PBS Assets/alertguide/guide2/settings_icon.png",
      },
      features: {
        heading: "Building Your Portfolio: Manage Properties",
        desc: "The \"Manage Properties\" tab is your gateway to activating the PBS monitoring system for your assets.",
        steps: [
          {
            title: "Add Property by Address (Most Common)",
            icon: "/PBS Assets/alertguide/guide2/add_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide2/step1.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Action: Select Borough, enter House Number and Street Name."
              },
              {
                text: "Result: Click \"Add Property\", and the system will instantly pull the relevant data from NYC Databases and add it to your Property List.",
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Add Property by BIN (Building Identification Number)",
            icon: "/PBS Assets/alertguide/guide2/bin_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide2/step2.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Action: Enter the unique BIN"
              },
              {
                text: "Result: The system retrieves the full property history from DOB records for precise identification."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Request Agent Assistance (\"Add Property for Me\")",
            icon: "/PBS Assets/alertguide/guide2/assistance_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide2/step3.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Action: Click this button to open a request form. Provide the property address, your details, and any additional notes."
              },
              {
                text: "Click Submit. A PBS representative will add the property on your behalf, ensuring accuracy for complex portfolios."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Delete a Property",
            icon: "/PBS Assets/alertguide/guide2/delete_icon.png",
            description:
              "The final step to activating the PBS Alert System for your assets is to populate your portfolio.",
            banner: {
              src: "/PBS Assets/alertguide/guide2/step4.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Action: Locate the property in your list and click \"Delete\" button"
              },
              {
                text: "Note: Archived properties retain their historical data for your record."
              }
            ]
            ,
            footer:
              "Pro Tip: Upon adding your first property, the PBS 24/7 monitoring engine activates. You will begin receiving real-time alerts for violations, deadlines, and permits. For an in-depth look at property management, see our detailed guide: PBS Alert System: Managing Your Property Portfolio & Profile"
          }
        ]
      },
      serviceTiers: {
        heading: "Initial Profile Configuration",
        title1: "Updating Your Profile Picture",
        icon1: "/PBS Assets/alertguide/guide2/login_icon.png",
        title2: "Editing Your Company Profile",
        icon2: "/PBS Assets/alertguide/guide2/company_icon.png",
        paragraphs: [
          "Immediately after your first login, we recommend configuring your profile for a personalized experience."
        ],
        suffix: "This ensures your contact information is accurate for all communications and shared property profiles."
      },
      conclusion: {
        heading: "Monitoring Portfolio Health",
        paragraphs: [
          "The \"Property Summary\" tab provides a high-level overview of your portfolio's compliance status. Use this screen to quickly access:"
        ],
        items: [
            "Open Violations (DOB, HPD, ECB, FDNY)",
            "Upcoming Inspection Deadlines",
            "Active Permit Statuses",
            "Hearing Schedules"
        ]
      },
      configuringAlerts: {
        heading: "Configuring Your Alerts",
        desc: "To ensure you receive alerts through your preferred channels, configure your settings upon login.",
        subheading: "Step 2: Email Verification and Account Confirmation",
        items: [
          {
            text: "Navigate to the \"Settings\" tab."
          },
          {
            text: "Under the notification preferences, select your desired method:"
          },
          {
            text: "You may select one or both options"
          },
          {
            text: "Changes are saved automatically"
          },
        ],
        suffix: "Remember: For the first 3 months, our Alert Service is free. Thereafter, Full Membership ($9/Buiding/Month) unlocks proactive remediation, where our team automatically begins resolving issues the moment an alert is generated.",

      }
    }
  },
  {
    id: 3,
    title: "Managing Your Property Profile",
    excerpt: "Step-by-step instructions on editing property details, updating ownership info, and keeping your compliance data current.",
    slug: "manage-your-property-profile",
    date: "January 25, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide3/thumbnail.webp",
    author: "PBS Team",
    modified: "2025-01-25",
    layout: "third", // Different layout for this guide
    modules: {

      introduction: {
        heading: "Introduction",
        paragraphs: [
          "Completion of the sign up process and initial property addition, as outlined in Guide 1 and Guide 2.",
          "This guide details the procedures for managing an individual property within the PBS Member Portal. Each property in your portfolio is assigned a dynamic Property Profile - a comprehensive dashboard that aggregates data, documents and tools specific to that asset. Mastering this profile is essential for maintaining organized, accessible and actionable property intelligence."
        ]
      },
      accessingPropertyProfile: {
        heading: "Accessing Your Property Profile",
        title1: "Navigate to Your Portfolio",
        icon1: "/PBS Assets/alertguide/guide3/portfolio_icon.png",
        title2: "Select a Property",
        icon2: "/PBS Assets/alertguide/guide3/property_icon.png",
        paragraph1: [
          "From your main dashboard, locate the \"Building Profiles\" tab in the left-side navigation panel.", 
        "Click on \"Building Profiles\" to reveal a complete list of properties in your portfolio.",
        ],
        paragraph2: [
          "From the generated property list, click on the name or address of the property you wish to manage.", 
        "The system will load the dedicated \"Property Profile\" page, presenting a full summary and management tools.",
        ]
        
      },
      functions: {
        heading: "Core Profile Management Functions",
        desc: "The Property Profile is organized into a central data view and a right-hand sidebar for management actions.",
        steps: [
          {
            title: "Reviewing the Central Property Summary",
            icon: "/PBS Assets/alertguide/guide3/review_icon.png",
            description:
              "The main content area displays a live, auto-updating summary of all property data, including:",
            banner: {
              src: "/PBS Assets/alertguide/guide3/step1.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Imagery: Photographs and building diagrams."
              },
              {
                text: "Zonign Informations: FAR limits, use restrictions and overlay districts."
              },
              {  
                text: "Summary Statistics: Courts of open and closed items, disaggregated by:",
                subpoints: [
                  "Violations (DOB, HPD, ECB, FDNY",
                  "Inspections (Local Law 11, 152, Boiler, etc.)",
                  "Permits (Scaffolding, Plumbing, Electrical)",
                  "Complaints and Hearings"
                ]
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Assigning a Dedicated Contact",
            icon: "/PBS Assets/alertguide/guide3/contact_icon.png",
            description:
              "To specify who should be contacted for issues related to this property:",
            banner: {
              src: "/PBS Assets/alertguide/guide3/step2.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "In the right-hand sidebar, under \"Property Information\", locate the \"Dedicated Contact\" section."
              },
              {
                text: "Click \"Add Contact\" or the edit icon (✎)."
              },
              {
                text: "A form will appear. Enter the following details:",
                subpoints:[
                  "Contact Name",
                  "Phone Number",
                  "Contact Address",
                ]
              },
              {
                text: "Click \"Save\" to assign this contact to the property. This information will be used by the PBS team for all related communications."
              }

            ]
            ,
            footer:
              ""
          },
          {
            title: "Creating and Managing Property Notes",
            icon: "/PBS Assets/alertguide/guide3/notes_icon.png",
            description:
              "The notes feature allows for unlimited, persistent internal memos.",
            banner: {
              src: "/PBS Assets/alertguide/guide3/step3.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Directly below the contact section, find the \"Notes\" section in the right-hand sidebar."
              },
              {
                text: "To create a new note, click into the text field and enter your text (e.g., \"Tenant in Unit 3B handles package reception for super\", or \"Roof warranty expires Q2 2025\""
              },
              {
                text: "Click \"Save Note\" to append it to the property's record."
              },
              {
                text: "To review all historiical notes, scroll within the \"Notes\" section. All saved notes are displayed here in chronological order."
              }

            ]
            ,
            footer:
              ""
          },
          {
            title: "Uploading and Storing Documents",
            icon: "/PBS Assets/alertguide/guide3/docs_icon.png",
            description:
              "The document vault provides secure, centralized storage for all property-related files.",
            banner: {
              src: "/PBS Assets/alertguide/guide3/step4.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Beneath the Notes section, locate the \"Documents\" section."
              },
              {
                text: "Click the \"Upload Document\" button."
              },
              {
                text: "A system dialog will open. Select the file(s) you wish to upload (e.g., lease agreements, violation responses, certificates of occupancy) directly from your laptop or PC."
              },
              {
                text: "Upon selection, the upload will commence automatically."
              },
              {
                text: "All uploaded documents will be listed in the \"Uploaded Documents\" area within this seciton. Click on any document name to view or download it."
              }

            ]
            ,
            footer:
              ""
          }
        ]
      },
      conclusion: {
        heading: "Conclusion",
        paragraphs: [
          "By utilizing the features outlined in this guide, you can ensure each Property Profile in your portfolio is a complete and current source of truth. This centralized management-encompassing data, contacts, notes, and documents, is fundamental to proactive property management and streamlined compliance.",
          "Related Guide:",
          "For Instruction on adding properties to your portfolio, please see the PBS Alert System: User Profile & Property Setup.",
          "To understand the alerts generated from this property data, please see the PBS Alert System: Understanding PBS Alerts & NYC Compliance."

        ],
        items: [
            "Open Violations (DOB, HPD, ECB, FDNY)",
            "Upcoming Inspection Deadlines",
            "Active Permit Statuses",
            "Hearing Schedules"
        ]
      },
      triggers: {
        heading: "What Triggers Alerts",
        paragraphs: [
          "The PBS Alert System monitors multiple NYC agencies and triggers alerts for various compliance and regulatory events."
        ]
      },
      categories: {
        heading: "Alert Categories",
        items: [
          {
            title: "1. Violations",
            description: "Newly issued violations from DOB, HPD, ECB, FDNY, and other agencies. Alerts are sent immediately when a violation is recorded."
          },
          {
            title: "2. Inspection Deadlines",
            description: "Upcoming inspection requirements including LL11 (Facade Inspection), LL126 (Parking Inspection), LL126 (Parapet Inspection), LL152, Boiler Inspection, Sprinkler Hydrostatic Test, and Elevator Inspection Deadlines."
          },
          {
            title: "3. Zoning Changes",
            description: "Upcoming rezoning proposals or approved modifications that may affect your property's compliance requirements."
          },
          {
            title: "4. Permit Expirations",
            description: "Scaffolding, plumbing, electrical, or any type of permits nearing expiration or renewal deadlines."
          }
        ]
      },
      urgency: {
        heading: "Alert Urgency Levels",
        paragraphs: [
          "Alerts are automatically ranked by urgency, helping you prioritize which issues need immediate attention."
        ]
      },
      responding: {
        heading: "Responding to Alerts",
        paragraphs: [
          "Each alert includes actionable steps and can be linked to your property card for detailed information and document management."
        ]
      }
    }
  },
  {
    id: 4,
    title: "Creating & Managing Custom Inspection",
    excerpt: "Discover how to build custom inspections, schedule them, and track results to stay ahead of NYC safety and maintenance requirements.",
    slug: "managing-property-profile",
    date: "January 25, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide4/thumbnail.webp",
    author: "PBS Team",
    modified: "2025-01-25",
    layout: "fourth", // Different layout for this guide
    modules: {

      introduction: {
        heading: "Introduction",
        paragraphs: [
          "While the PBS Alert System automatically tracks mandated inspections from NYC agencies, some property-specific inspections may fall outside official requirements. This guide details the procedure for creating and managing Custom Inspections, enabling you to track any property-specific review, audit, or maintenance check directly within your PBS portal.",
          "Custom Inspections ensure comprehensive oversight beyond automated alerts, covering internal audits, insurance requirements, lender mandates, or preventative maintenance schedules."
        ]
      },
      accessingPropertyProfile: {
        heading: "Accessing The Custom Inspection Interface",
        title1: "Navigate to Inspections Section",
        icon1: "/PBS Assets/alertguide/guide4/navigate_icon.png",
        title2: "Initiate New Custom Inspection",
        icon2: "/PBS Assets/alertguide/guide4/custom_icon.png",
        paragraph1: [
          "From your main dashboard, locate and click the \"Inspections\" tab in the left-side navigation panel.", 
        "Within the Inspections interface, select the \"Others\" category to reveal the Custom Inspection management tab.",
        ],
        paragraph2: [
          "Within the Custom Inspection tab, click the \"Add New Custom Inspection\" button.", 
        "A creation form will appear, presenting fields for defining your custom inspection.",
        ]
        
      },
      functions: {
        heading: "Defining Custom Inspection Parameters",
        desc: "Complete the following required fields to establish your custom inspection:",
        steps: [
          {
            title: "Property Selection",
            icon: "/PBS Assets/alertguide/guide4/step1_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide4/step1.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Field: Property Name"
              },
              {
                text: "Action: Select the target property from the dropdown menu containing all properties in your portfolio."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Inspection Configuration",
            icon: "/PBS Assets/alertguide/guide4/step2_icon.png",
            description:
              "Complete these core fields to define the inspection parameters:",
            banner: {
              src: "/PBS Assets/alertguide/guide4/step2.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Inspection Type: Enter a descriptive classification (e.g., \"Annual Roof Assessment,\" \"Insurance Walkthrough,\" \"Elevator Mechanical Review\")."
              },
              {
                text: "Inspection Status: Set the current state from predefined options (e.g., \"Scheduled,\" \"In Progress,\" \"Completed\")."
              },
              {
                text: "Due Date: Select the target completion date using the date picker interface.",
              },
              {
                text: "Notify Before: Configure advance alert timing (e.g., \"7 days before due date,\" \"30 days before due date\")."
              }

            ]
            ,
            footer:
              ""
          },
          {
            title: "Additional Details",
            icon: "/PBS Assets/alertguide/guide4/step3-1_icon.png",
            title2: "Save Inspection",
            icon2: "/PBS Assets/alertguide/guide4/step3-2_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide4/step3.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Field: Notes/Description."
              },
              {
                text: "Purpose: Provide comprehensive context, including:",
                subpoints: [
                  "Specific areas/focus points",
                  "Contractor or responsible party information",
                  "Special requirements or conditions",
                ]
              }

            ],
            items2: [
              {
                text: "After completing all fields, click the \"Save\" button."
              },
              {
                text: "The system will validate inputs and add the inspection to your custom inspections list.",
              }

            ],
            footer:
              ""
          }
        ]
      },
      customInspections: {
        heading: "Saving and Managing Custom Inspections",
        icon: "/PBS Assets/alertguide/guide4/manage_icon.png",
        title: "View and Manage Inspections",
        items: [
          {
            text: "All saved custom inspections appear in your Custom Inspections list."
          },
          {
            text: "Each inspection entry displays:",
            subpoints: [
              "Property name and inspection type",
              "Due date with color-coded urgency indicator",
              "Current status",
              "Notification status"
            ]
          },
          {
            text: "Use edit (✎) and delete (🗑) controls to modify existing inspections."
          }
        ],
        suffix: "Key Feature: The system provides unlimited custom inspection creation, enabling complete flexibility for portfolio-specific requirements.",

      },
      notifications: {
        heading: "Notification and Tracking",
        paragraphs: [
          "Custom inspections generate alerts based on your \"Notify Before\" settings",
          "Notifications appear through your configured channels (portal, email, mobile)",
          "Inspection status can be updated as work progresses",
          "Completed inspections remain in history for audit and reference purposes"
        ]
      },
      conclusion: {
        heading: "Conclusion",
        paragraphs: [
          "The Custom Inspection feature extends PBS monitoring beyond automated city agency data, providing a unified platform for all property oversight needs. By creating custom inspections, you ensure no critical review—whether internal, contractual, or preventative—goes unmonitored.",
          "Related Guide:",
          

        ],
        items: [
            "• For managing automated inspection alerts: PBS Alert System: Understanding PBS Alerts & NYC Compliance",
            "• For general property management: PBS Alert System: Managing Your Property Profile",        
          ]
      },
      triggers: {
        heading: "What Triggers Alerts",
        paragraphs: [
          "The PBS Alert System monitors multiple NYC agencies and triggers alerts for various compliance and regulatory events."
        ]
      },
      categories: {
        heading: "Alert Categories",
        items: [
          {
            title: "1. Violations",
            description: "Newly issued violations from DOB, HPD, ECB, FDNY, and other agencies. Alerts are sent immediately when a violation is recorded."
          },
          {
            title: "2. Inspection Deadlines",
            description: "Upcoming inspection requirements including LL11 (Facade Inspection), LL126 (Parking Inspection), LL126 (Parapet Inspection), LL152, Boiler Inspection, Sprinkler Hydrostatic Test, and Elevator Inspection Deadlines."
          },
          {
            title: "3. Zoning Changes",
            description: "Upcoming rezoning proposals or approved modifications that may affect your property's compliance requirements."
          },
          {
            title: "4. Permit Expirations",
            description: "Scaffolding, plumbing, electrical, or any type of permits nearing expiration or renewal deadlines."
          }
        ]
      },
      urgency: {
        heading: "Alert Urgency Levels",
        paragraphs: [
          "Alerts are automatically ranked by urgency, helping you prioritize which issues need immediate attention."
        ]
      },
      responding: {
        heading: "Responding to Alerts",
        paragraphs: [
          "Each alert includes actionable steps and can be linked to your property card for detailed information and document management."
        ]
      }
    }
  },
  {
    id: 5,
    title: "Understanding and Managing Your PBS Alerts: A Proactive Guide to NYC Compliance",
    excerpt: "Understand how PBS alerts work, how to interpret them, and how to take timely action to avoid violations and penalties.",
    slug: "understanding-and-managing-your-pbs-alerts",
    date: "January 25, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide5/thumbnail.webp",
    author: "PBS Team",
    modified: "2025-01-25",
    layout: "fifth", // Different layout for this guide
    modules: {

      introduction: {
        heading: "Introduction To Your 24/7 Digital Watchman",
        paragraphs: [
            "Welcome to the center of your property management strategy. The PBS Alert System is your proactive partner, constantly monitoring over 45 NYC agency datasets for any activity related to your portfolio. This guide will help you understand the different types of alerts you'll receive and how to manage them effectively, transforming city bureaucracy from a reactive burden into a streamlined process you control."
        ]
      },
      howAlertsWork: {
        heading: "How PBS Alerts Work: The Engine Behind the Scenes",
        paragraphs: [
            "Before understanding the alerts, it's helpful to know how they are generated. Our system performs continuous, automated scans of official city sources like DOB NOW, HPD Online, ECB/OATH, FDNY databases and 45 more city agencies. The moment a new record, a violation, a new inspection cycle, an expiring permit is posted that matches one of your properties, our system triggers an instant alert to you. This happens 24/7, ensuring you are often the first to know, even before a letter arrives in the mail."
        ]
      },
      functions: {
        heading: "The Alert Catalog: A Guide to What You'll See",
        desc: "Alerts are categorized by type and urgency to help you prioritize your response. Here are the primary alert categories:",
        steps: [
          {
            title: "Violation Alerts",
            icon: "/PBS Assets/alertguide/guide5/step1_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide5/step1.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "What it is: A notice that a city agency has cited your property for a non-compliant condition."
              },
              {
                text: "Agencies: DOB, HPD, ECB/OATH, FDNY, DEP, DSNY."
              }
            ],
            grid_img: "/PBS Assets/alertguide/guide5/step1_img.png",
            
            footer:
              ""
          },
          {
            title: "Inspection Deadline & Status Alerts",
            icon: "/PBS Assets/alertguide/guide5/step2_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide5/step2.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "What it is: A notification of an upcoming, legally mandated inspection deadline."
              },
              {
                text: "Common Types: Local Law 11 (FISP), Local Law 126 (Garage/Parapet), Local Law 152 (Gas Piping), Boiler Inspection, Elevator Inspection."
              },
              {
                text: "What to Look For: The type of inspection and the final filing deadline.",
              }

            ]
            ,
            grid_button: "Need an Inspection?",
            grid_button_link: "/inspection-services",
            footer:
              "Schedule a certified inspection with a PBS partner."
          },
          {
            title: "Permit & License Alerts",
            icon: "/PBS Assets/alertguide/guide5/step3_icon.png",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide5/step3.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "What it is: A warning that an active permit or license is nearing its expiration date."
              },
              {
                text: "Common Types: Scaffolding Permits, Plumbing Permits, Place of Assembly permits, Elevator Registration."
              },
              {
                text: "What to Look For: The permit type and expiration date."
              }

            ],
            footer:
              ""
          },
          {
            title: "Hearings & Penalties Alerts",
            icon: "/PBS Assets/alertguide/guide5/step4_icon.png",
            description:
              "This category encompasses the formal legal and financial consequences that follow a violation. While the initial violation is critical, missing a hearing or penalty deadline has severe, immediate financial repercussions.",
            banner: {
              src: "/PBS Assets/alertguide/guide5/step4.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "What it is: Notifications for scheduled administrative hearings and associated penalties from agencies like Environmental Control Board, Housing Preservation & Development, and Fire Department of the City of New York. This includes both the initial notice and updates on the status."
              },
              {
                text: "Why it's Critical: These alerts represent the \"point of no return\" where a simple violation escalates into a mandated legal proceeding and a definitive fine. Ignoring them, leads to default judgments, increased penalties, and potential liens on your property."
              },
              {
                text: "What to Look For:",
                subpoints: [
                  "Hearing Date & Time: The single most important piece of information.",
                  "Agency & Violation Number: Links the hearing back to the original issue.",
                  "Penalty Amount: The fine that has been imposed or is being adjudicated.",
                  "Status: Whether the penalty is Imposed (judge's ruling), Defaulted (you missed the hearing), or has an Overpayment.",
                ]
              }

            ],
            footer:
              ""
          }
        ]
      },
      receiveAlerts: {
        heading: "Where You Receive Alerts",
        paragraphs: [
            "Welcome to the center of your property management strategy. The PBS Alert System is your proactive partner, constantly monitoring over 45 NYC agency datasets for any activity related to your portfolio. This guide will help you understand the different types of alerts you'll receive and how to manage them effectively, transforming city bureaucracy from a reactive burden into a streamlined process you control."
        ]
      },
      viewAlerts: {
        heading: "View Your Alerts on PBS Portal",
        paragraphs: [
            "Receiving an alert is just the first step. Here’s how to manage them effectively within the PBS alert system."
        ],
        items_title: "View the Alert Details",
        items_desc: [
          "From dashboard search for any agency and then Alert type, This will show you:"
        ],
        items: [
          {
            text: "The full official description from the city."
          },
          {
            text: "The specific property.",      
          },
          {
            text: "Associated deadlines and status."
          }
        ]
      },
      advantages: {
        heading: "The PBS Advantage",
        description:"With a standard PBS Alert System account, you have the intelligence to act. With a PBS Membership, the solution is integrated directly into the platform.",
        icon: "/PBS Assets/alertguide/guide4/manage_icon.png",
        title: "When an alert appears for a member, here's what happens:",
        grid_button: "Upgrade to Full-Service Membership for Stress-Free Resolution",
        grid_button_link: `${API_URL}/portal/register`,
        items: [
          {
            text: "Auto-Generated Checklist: The system immediately creates a step-by-step remediation plan tailored to the specific alert."
          },
          {
            text: "PBS Team Notification: A dedicated PBS specialist is assigned and begins working on the issue."
          },
          {
            text: "Seamless Service Hand-off:",
            subpoints: [
              "Violation Alert? Our expediting team starts the process of resolving it with the city.",
              "Inspection Alert? Our inspection services team schedules it with a certified professional.",
            ]
          },
          {
            text: "You Stay in the Loop: Track every step of the progress from within the same alert in your portal. The alert is no longer just a problem; it's an active work order."
          }
        ],
      },
      bestPractices: {
        heading: "Best Practices for Alert Management",
        paragraphs: [
          "Review Daily: Make a quick scan of your alert dashboard part of your morning routine.",
          "Prioritize by Deadline: Use the \"Cure-by\" and \"Due Date\" fields to sort your action items.",
          "Use the Notes Feature: This creates a valuable audit trail for every action on your property."
        ],
        description:"Don't Just Dismiss—Resolve: Only mark an alert as \"Resolved\" once the underlying issue with the city has been closed."
      },
      conclusion: {
        heading: "Conclusion",
        paragraphs: [
          "The PBS Alert System is designed to give you back control. By understanding the types of alerts and how to manage them, you shift from a reactive posture to a proactive, commanding role in managing your NYC property portfolio.",
        ],
        grid_button: "Log In to Your Portal Now to Review Your Active Alerts",
        grid_button_link: `${API_URL}/portal/login`,
      },
      triggers: {
        heading: "What Triggers Alerts",
        paragraphs: [
          "The PBS Alert System monitors multiple NYC agencies and triggers alerts for various compliance and regulatory events."
        ]
      },
      categories: {
        heading: "Alert Categories",
        items: [
          {
            title: "1. Violations",
            description: "Newly issued violations from DOB, HPD, ECB, FDNY, and other agencies. Alerts are sent immediately when a violation is recorded."
          },
          {
            title: "2. Inspection Deadlines",
            description: "Upcoming inspection requirements including LL11 (Facade Inspection), LL126 (Parking Inspection), LL126 (Parapet Inspection), LL152, Boiler Inspection, Sprinkler Hydrostatic Test, and Elevator Inspection Deadlines."
          },
          {
            title: "3. Zoning Changes",
            description: "Upcoming rezoning proposals or approved modifications that may affect your property's compliance requirements."
          },
          {
            title: "4. Permit Expirations",
            description: "Scaffolding, plumbing, electrical, or any type of permits nearing expiration or renewal deadlines."
          }
        ]
      },
      urgency: {
        heading: "Alert Urgency Levels",
        paragraphs: [
          "Alerts are automatically ranked by urgency, helping you prioritize which issues need immediate attention."
        ]
      },
      responding: {
        heading: "Responding to Alerts",
        paragraphs: [
          "Each alert includes actionable steps and can be linked to your property card for detailed information and document management."
        ]
      }
    }
  },
  {
    id: 6,
    title: "Guide for Ticket System or Support",
    excerpt: "Learn how to submit support tickets, track responses, and get fast help from the PBS team whenever you need it.",
    slug: "ticket-system-and-support",
    date: "January 25, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide6/thumbnail.webp",
    author: "PBS Team",
    modified: "2025-01-25",
    layout: "sixth", // Different layout for this guide
    modules: {

      introduction: {
        heading: "Introduction",
        paragraphs: [
            "Effective communication is key to resolving property compliance issues quickly. The PBS Ticket System is your direct line to our support and expediting teams, designed to ensure no question goes unanswered and no issue is overlooked. This guide will show you how to efficiently create, manage, and track support tickets from within your PBS Member Portal, ensuring fast and context-aware assistance for any concern related to your properties or the platform itself.",
        ]
      },
      ticketCenter: {
        heading: "How to access the ticket center",
        intro: "You can access the Ticket Center from two primary locations within your dashboard, depending on your needs.",
        title1: "Property List",
        optionA: "Through a Specific Building Profile (Recommended for Property-Specific Issues)",
        optionB: "Through the Main Support Button (Recommended for General Inquiries)",
        paragraph1: "Use this method when your question or issue pertains to a specific property (e.g., a violation, a question about a permit, or a document uploaded for a Specific address). This automatically links the ticket to the property, giving our team immediate context.",
        paragraph2: "Use this method for general account questions, billing inquiries, or technical issues with the platform that are not tied to a single property.",
      },
      ticketCreation: {
        heading: "Step-by-Step Guide to Creating a Ticket",
        title: "Creating a Ticket from a Building Profile",
        items: [
          {text:"Navigate to Building Profiles: From your dashboard, click on the “Building Profiles” tab in the main navigation."},
          {text:"Select a Property: Click on the address of the property related to your issue. This will open the detailed Property Card."},
          {text:"Initiate the Ticket: On the Property Card, locate and click the “Send Ticket” button."},
          {text:"Complete the Ticket Form: A new page will open.",
            subpoints: [
              "Subject: Enter a concise summary of the issue (e.g., “Question about DOB Violation #12345”).",
              "Description: Provide a clear and detailed description of your issue, question, or request.",
              "Priority: Select the appropriate priority level (Low, Medium, High) to help us triage your request effectively.",
              "Submit: Click the “Submit” button. Your ticket is now created and linked directly to that property."
            ]
          },
        ],
      },
      manageTickets: {
        heading: "Managing your tickets",
        description: "After submitting a ticket, you can track its progress and communicate with our team through the Support section.",
        items: [
          {text:"Viewing Your Tickets: Click the “Support” button to see all your tickets categorized under three tabs:",
            subpoints: [
              "Active Tickets: Open tickets that are being processed by our team.",
              "Completed Tickets: Resolved tickets for your reference.",
            ]
          },
          {text:"Adding Comments & Tracking Progress:",
            subpoints: [
              "Click on any Active Ticket to view its details and full conversation history.",
              "To provide an update or additional information, use the “Add Comment” field. This is ideal for sharing proceedings, instructions, or attached documents.",
            ]
          },
          {text:"Completing a Ticket:",
            subpoints: [
              "Once an issue is resolved to your satisfaction, you can close the ticket by marking it as “Complete.”"
            ]
          },
        ],
      },
      conclusion: {
        heading: "Conclusion",
        paragraphs: [
          "PBS Ticket System ensures that your support requests are handled in an organized, timely, and context-rich manner. By creating tickets directly from a Building Profile, you empower our team to act faster with all the relevant property data at their fingertips.",
          "For any issue, big or small, the ticket system is the most efficient way to get the help you need and maintain a clear record of all communications."
        ],
        grid_button: "Need immediate assistance?",
        grid_button_link: `${API_URL}/portal/login`,
      },
    }
  },
  {
    id: 7,
    title: "HPD Mailing Guide",
    excerpt: "A simple guide explaining HPD mailing processes, requirements, and how PBS helps you stay compliant with NYC housing regulations.",
    slug: "hpd-mailing-guide",
    date: "January 15, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide7/thumbnail.webp",
    image1: "/PBS Assets/alertguide/guide1/intro.webp",
    author: "PBS Team",
    modified: "2025-01-15",
    layout: "seventh", // Layout type: default, minimal, hero-focus, split-view, timeline
    modules: {
      introduction: {
        heading: "Understanding HPD Mandatory Mailings",
        paragraphs: [
          "In New York City, the Department of Housing Preservation and Development (HPD) uses mandatory mailings as a primary tool to enforce vital safety laws and ensure tenants are informed of their rights (critical life-safety information including fire safety procedures, window guard requirements, and lead poisoning prevention), and a property owner's responsibilities. These are not suggestions; they are legal requirements with strict deadlines.",
          "The PBS Alert System streamlines this compliance process, ensuring you meet all deadlines and maintain proper documentation."
        ]
      },
      mailing: {
        heading: "Accessing the HPD Mailings Section",
        paragraphs: [
          "From your PBS dashboard, locate and click the \"HPD Mailings\" button in the navigation menu. You will see a list of your existing mailing records. Click the \"Create New Mailing\" button in the top right corner to begin a new mailing."
        ]
      },
      features: {
        heading: "Completing the Basic Information Section",
        steps: [
          {
            title: "Tenant Information",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step1.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Select the relevant property from your portfolio."
              },
              {
                text: "Choose the inspection type (Fire Safety, Window Guards, or Lead Poisoning Prevention) or all."
              },
              {
                text: "Enter the apartment number."
              },
              {
                text: "Provide the tenant's full name (first, middle (if that’s the case), last)."
              },
              {
                text: "Verify tenant address and phone number."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Owner/Representative Details",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step2.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Input owner name or representative name."
              },
              {
                text: "Provide owner address."
              },
              {
                text: "Specify sending address (if different from owner address)."
              },
              {
                text: "Include owner phone number."
              },
              {
                text: "Add any special mailing notes for the tenant."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Building Information",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step3.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Enter the construction year."
              },
              {
                text: "Select construction type: Combustible or Non-Combustible."
              },
              {
                text: "Specify number of above-ground and below-ground floors."
              }
            ]
            ,
            footer:
              ""
          }
        ]
      },
      sprinkler: {
        heading: "Fire Safety Section",
        title: "Sprinkler System Coverage",
        items: [
          {text:"Dwelling Units",
            subpoints: [
              "What it means: The individual apartments where tenants live.",
              "What to add: The number of apartments that have sprinkler heads installed inside them."
            ]
          },
          {text:"Hallways",
            subpoints: [
              "What it means: The individual apartments where tenants live."
            ]
          },
          {text:"Stairwells",
            subpoints: [
              "What it means: The enclosed fire stairs that serve as protected vertical exits during a fire.",
              "What to add: Specify whether each stairwell is equipped with sprinklers. Some older buildings may not have sprinklers in enclosed stairwells, while modern codes often require them."
            ]
          },
          {text:"Compactor Chute:",
            subpoints: [
              "What it means: The vertical shaft used for disposing of trash and refuse from multiple floors.",
              "What to add: This is a critical fire hazard area. You must report if the trash chute is sprinklered, which is a common code requirement to prevent a fire from starting in and spreading through the chute."
            ]
          },
        ],
        items1: [
          {
            text: "5. Other Areas: This is a catch-all for areas like:",
            subpoints: [
              "Basement (laundry rooms, storage, mechanical rooms)",
              "Garbage Compactor Room",
              "Parking Garage",
              "Commercial Spaces (if any)",
              "Rooms with Boilers or Fuel-Burning Equipment"
            ]
          }
        ]
      },
      fireAlarm: {
        heading: "Fire Alarm System",
        prefix: "This section details the functionality and connectivity of your building's fire alarm system. Accurate information here is critical for both tenant safety and regulatory compliance",
        steps: [
          {
            title: "Select the status",
            description:
              "",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step1_fire.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Yes: Select this if the building has a central, hardwired fire alarm system that produces a loud, audible alarm (horn/strobe) throughout the building when activated."
              },
              {
                text: "No: Select this only if the building does not have a central fire alarm system. Some smaller or older buildings may only have individual smoke detectors in each apartment that are not connected to a building-wide system."
              },
              {
                text: "Transmits alarm to fire dept: This refers to a direct, automated connection between your building's fire alarm panel and the FDNY's central dispatch system (often via a dedicated phone line or cellular transmitter)."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Add Manual Pull Stations",
            description:
              "A Manual Pull Station is the red box, usually with a handle, located near building exits. It allows a person to manually trigger the entire building's fire alarm system in case they see a fire before the smoke or heat detectors activate. You must indicate if your building's fire alarm system includes these manual pull stations.",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step2_fire.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "If your building has a central fire alarm (\"Yes\" from above), it almost certainly has manual pull stations at the exits. In this case, you would indicate that manual pull stations are present."
              },
              {
                text: "If your building does not have a central alarm (\"No\"), then it will not have manual pull stations."
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Public Address System",
            description:
              "A Public Address (PA) system allows building management or emergency responders to broadcast voice announcements throughout the building during an emergency (like a fire) or for important instructions.",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step3_fire.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Status: Select Yes, if your building has speakers installed in common areas or apartments that are connected to a central control panel (often located near the fire alarm panel) or No, if your building has no such system. In this case, you would skip the rest of this section."
              },
              {
                text: "Speaker Locations: Check all that apply: Stairwell, Hallway, Dwelling Unit, Other"
              },
              {
                text: "Other Locations: Specify any additional speaker locations"
              }
            ]
            ,
            footer:
              "Important Distinction: A building intercom system used to buzz people in is not typically considered a public address system unless it has the capability to broadcast to all speakers at once."
          },
          {
            title: "Means of Egress",
            description:
              "A \"Means of Egress\" is a continuous and unobstructed path of travel from any point in a building to a public way (like a street). It consists of three parts: the exit access (hallway), the exit (stairwell), and the exit discharge (final door to outside).",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step4_fire.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Type: Specify escape route type (Interior Stair, Exterior Stair, Fire Escape)"
              },
              {
                text: "Identification: Unique label (Stair A, Stair 1, Fire Escape Rear)"
              },
              {
                text: "Location: Where the egress is accessed (North end of hallway, etc.)"
              },
              {
                text: "Leads To: Final destination (Street level, Rear courtyard, etc.)"
              }
            ]
            ,
            footer:
              ""
          },
          {
            title: "Final Details",
            description: "",
            banner: {
              src: "/PBS Assets/alertguide/guide7/step5_fire.webp",
              containerClass: "flex flex-col items-center justify-center my-auto rounded-3xl",
              imageClass: " object-contain"
            },
            items: [
              {
                text: "Set prepared date and mailing send date"
              },
              {
                text: "Review all sections for completeness"
              },
              {
                text: "Click \"Create New Mailing\" to submit"
              }
            ]
            ,
            footer:
              ""
          }
        ]
      },
      forms: {
        heading: "Additional Forms and Documentation",
        subheading: "Window Guards & Lead Poisoning Forms:",
        desc: "Access official NYC-stamped forms via the \"Window Guards\" and \"Lead Poisoning\" tabs. These forms will be automatically included in your mailing package. Tenants must complete and return these forms by the specified due date",
        items: [
          {
            text: "Navigate to the \"Settings\" tab."
          },
          {
            text: "Under the notification preferences, select your desired method:"
          },
          {
            text: "You may select one or both options"
          },
          {
            text: "Changes are saved automatically"
          },
        ],

      },
      managingMailing: {
        heading: "Managing Existing Mailings",
        paragraphs: [
          "Viewing and Editing:"
        ],
        items: [
          "Return to HPD Mailings homepage to see your complete mailing list",
          "Click \"Edit\" to modify any existing mailing",
          "Use \"View\" to see completed forms and mailing status"
        ]
      },
      conclusion: {
        heading: "Conclusion",
        paragraphs: [
          "The PBS HPD Mailings module transforms a complex compliance requirement into a streamlined, organized process. By following this guide, you can ensure full compliance with NYC safety regulations while maintaining proper documentation and protecting tenant safety.",
          "Contact our support team through the PBS Ticket System for personalized help. Or Contact us on our given number (212-271-6837)"
        ],
        grid_button: "Need assistance with your HPD mailings?",
        grid_button_link: `${API_URL}/portal/login`,

      }
    }
  },
];

// Helper function to get all guides
export function getAllGuides() {
  return alertSystemGuides;
}

// Helper function to get guide by slug
export function getGuideBySlug(slug) {
  return alertSystemGuides.find(guide => guide.slug === slug);
}

// Helper function to get guide by id
export function getGuideById(id) {
  return alertSystemGuides.find(guide => guide.id === id);
}

// Helper function to get related guides (excluding current guide)
export function getRelatedGuides(currentGuideId, limit = 3) {
  return alertSystemGuides
    .filter(guide => guide.id !== currentGuideId)
    .slice(0, limit);
}

