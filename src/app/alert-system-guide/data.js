// Alert System Guide Data
// Custom-built alert system guides instead of WordPress CMS

export const alertSystemGuides = [
  {
    id: 1,
    title: "PBS Sign Up & Account Setup Guide",
    excerpt: "Learn how the PBS Alert System works, its features, and how to get started with real-time property monitoring and compliance alerts.",
    slug: "understanding-pbs-alert-system",
    date: "January 15, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide1/thumbnail.png",
    image1: "/PBS Assets/alertguide/guide1/intro.png",
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
              src: "/PBS Assets/alertguide/guide1/step1.png",
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
              src: "/PBS Assets/alertguide/guide1/step2.png",
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
              src: "/PBS Assets/alertguide/guide1/step3.png",
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
              src: "/PBS Assets/alertguide/guide1/step4.png",
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
    excerpt: "Step-by-step guide on adding properties individually or in bulk, managing your portfolio, and removing properties when needed.",
    slug: "add-manage-properties",
    date: "January 20, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide2/thumbnail.png",
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
              src: "/PBS Assets/alertguide/guide2/step1.png",
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
              src: "/PBS Assets/alertguide/guide2/step2.png",
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
              src: "/PBS Assets/alertguide/guide2/step3.png",
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
              src: "/PBS Assets/alertguide/guide2/step4.png",
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
    excerpt: "Comprehensive guide to different alert types, what triggers them, and how to respond effectively to maintain compliance.",
    slug: "manage-your-property-profile",
    date: "January 25, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide3/thumbnail.png",
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
              src: "/PBS Assets/alertguide/guide3/step1.png",
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
              src: "/PBS Assets/alertguide/guide3/step2.png",
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
              src: "/PBS Assets/alertguide/guide3/step3.png",
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
              src: "/PBS Assets/alertguide/guide3/step4.png",
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
    excerpt: "Comprehensive guide to different alert types, what triggers them, and how to respond effectively to maintain compliance.",
    slug: "managing-property-profile",
    date: "January 25, 2025",
    category: "Alert System Guide",
    image: "/PBS Assets/alertguide/guide4/thumbnail.png",
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
              src: "/PBS Assets/alertguide/guide4/step1.png",
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
              src: "/PBS Assets/alertguide/guide4/step2.png",
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
              src: "/PBS Assets/alertguide/guide4/step3.png",
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
  }
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

