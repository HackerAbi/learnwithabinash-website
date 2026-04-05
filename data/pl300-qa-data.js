/**
 * PL-300 Q&A Practice Data
 * Power BI Data Analyst Certification — Questions & Answers
 * 
 * Each question object:
 *   id            : number  — sequential question number
 *   question      : string  — the question text
 *   options       : array   — answer choices (strings)
 *   correctAnswer : number  — index (0-based) of the correct option
 *   explanation   : string  — detailed explanation (HTML supported)
 *   category      : string  — topic category for filtering
 *   tags          : array   — keyword tags for search
 *
 * To add new questions: append to the array below.
 */
window.PL300_QA_DATA = [
  {
    id: 1,
    question: "Which storage mode leaves the data at the data source?",
    options: ["Import", "Direct Query", "Dual"],
    correctAnswer: 1,
    explanation: "<strong>Direct Query</strong> — In Direct Query mode, Power BI does not import or copy the data. Instead, it sends queries directly to the underlying data source every time a user interacts with a report. This means the data always stays at the source and you always see the latest data.<br><br><strong>Import</strong> loads data into Power BI's in-memory engine (VertiPaq).<br><strong>Dual</strong> allows a table to act as both Import and Direct Query depending on the context.",
    category: "Data Modeling",
    tags: ["storage mode", "Direct Query", "Import", "Dual", "data source"]
  },
  {
    id: 2,
    question: "Which technology improves performance by generating a single query statement to retrieve and transform source data?",
    options: ["Query folding", "Adding index columns", "Adding custom columns with complex logic"],
    correctAnswer: 0,
    explanation: "<strong>Query folding</strong> is the ability of Power Query to translate its transformation steps into a single native query (e.g., SQL) that is sent to the data source. This pushes the processing to the source server, which is typically much faster than loading all raw data and transforming it locally.<br><br><strong>Adding index columns</strong> or <strong>custom columns with complex logic</strong> are local operations that actually <em>break</em> query folding, reducing performance.",
    category: "Power Query",
    tags: ["query folding", "performance", "Power Query", "transformation", "native query"]
  },
  {
    id: 3,
    question: "What type of import error might leave a column blank?",
    options: ["Keep errors", "Unpivot columns", "Data type error"],
    correctAnswer: 2,
    explanation: "<strong>Data type error</strong> — When Power BI encounters a value that doesn't match the expected data type during import (e.g., text in a numeric column), it replaces the value with <code>null</code>, effectively leaving the cell blank.<br><br><strong>Keep errors</strong> retains the error values rather than blanking them. <strong>Unpivot columns</strong> is a transformation that restructures data and doesn't cause blank columns.",
    category: "Power Query",
    tags: ["data type", "import error", "blank column", "null", "Power Query"]
  },
  {
    id: 4,
    question: "You have a dataset that uses the development database as a data source. You need to configure the dataset so that you can easily change the data source between the development, test, and production database servers from powerbi.com. Which should you do?",
    options: [
      "Create a JSON file that contains the database server names. Import the JSON file to the dataset.",
      "Create a parameter and update the queries to use the parameter.",
      "Create a query for each database server and hide the development tables.",
      "Set the data source privacy level to Organizational and use the ReplaceValue Power Query M function."
    ],
    correctAnswer: 1,
    explanation: "<strong>Create a parameter and update the queries to use the parameter.</strong><br><br>Since you can't edit dataset data sources directly in Power BI service, Microsoft recommends using <strong>parameters</strong> to store connection details such as instance names and database names, instead of using a static connection string. This allows you to manage the connections through the Power BI service web portal, or using APIs, at a later stage.<br><br>This is especially useful in <strong>deployment pipelines</strong> (Dev → Test → Prod) where each stage points to a different server.<br><br><strong>References:</strong><br>• <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/deployment-pipelines-best-practices' target='_blank' rel='noopener'>Deployment Pipelines Best Practices</a><br>• <a href='https://www.fourmoo.com/2018/03/27/using-the-power-bi-service-parameters-to-change-connection-strings-to-possibly-change-between-dev-test-prod/' target='_blank' rel='noopener'>Using Power BI Service Parameters</a>",
    category: "Power BI Service",
    tags: ["parameters", "deployment pipeline", "data source", "dev test prod", "connection string"]
  },
  {
    id: 5,
    question: "You have an Azure SQL database that contains sales transactions. The database is updated frequently. You need to generate reports from the data to detect fraudulent transactions. The data must be visible within five minutes of an update. How should you configure the data connection?",
    options: [
      "Add a SQL statement.",
      "Set Data Connectivity mode to DirectQuery.",
      "Set the Command timeout in minutes setting.",
      "Set Data Connectivity mode to Import."
    ],
    correctAnswer: 1,
    explanation: "<strong>Set Data Connectivity mode to DirectQuery.</strong><br><br>With DirectQuery, no data is imported or copied into Power BI Desktop. Instead, Power BI queries the underlying data source directly every time you interact with a visualization — so you're <strong>always viewing current data</strong>.<br><br>This is essential when data must be visible within minutes of an update, as in fraud detection scenarios.<br><br><strong>Why not Import?</strong> With Import mode, data is loaded into Power BI's in-memory engine. To see changes, you must refresh the full dataset again — scheduled refreshes have a minimum interval of 30 minutes, which doesn't meet the 5-minute requirement.<br><br><strong>Reference:</strong> <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-use-directquery' target='_blank' rel='noopener'>Use DirectQuery in Power BI</a>",
    category: "Data Connectivity",
    tags: ["DirectQuery", "Import", "Azure SQL", "real-time", "fraud detection", "data connectivity"]
  },
  {
    id: 6,
    question: "You plan to publish your SSAS Tabular (live connection) data model to Power BI Service. What must be used in order for this to be possible?",
    options: ["Data Gateway", "Dual Storage Mode", "Parameters", "Admin Privileges"],
    correctAnswer: 0,
    explanation: "<strong>Data Gateway</strong> — Data Gateways are required for on-premises data sources, like SSAS Tabular live connections. The gateway acts as a bridge between the on-premises data source and the Power BI Service in the cloud, allowing live queries to flow securely without moving data.",
    category: "Power BI Service",
    tags: ["Data Gateway", "SSAS Tabular", "live connection", "on-premises", "Power BI Service"]
  },
  {
    id: 7,
    question: "Which of the following sources can Power BI connect to?",
    options: ["SQL Database", "Google Analytics", "R scripts", "All of the above"],
    correctAnswer: 3,
    explanation: "<strong>All of the above</strong> — Power BI can connect to virtually any type of data source, including (but not limited to) SQL databases, R scripts, and Google Analytics. Power BI supports hundreds of connectors across databases, files, online services, and custom/scripted sources.",
    category: "Data Connectivity",
    tags: ["data source", "SQL", "Google Analytics", "R scripts", "connectors"]
  },
  {
    id: 8,
    question: "What is the Query Editor used for?",
    options: [
      "As a cloud-based storage option for your organization's data",
      "To shape & transform data, then load it into Power BI",
      "To create relationships between data and lookup tables",
      "To create measures & calculated columns using DAX"
    ],
    correctAnswer: 1,
    explanation: "<strong>To shape & transform data, then load it into Power BI.</strong><br><br>Once you connect to data, the Query Editor (Power Query Editor) lets you shape and transform the data to meet your needs — such as removing columns, filtering rows, changing data types, merging queries, and more — then load that cleaned model into Power BI Desktop.<br><br>Relationships are managed in the <strong>Model view</strong>, and DAX measures/calculated columns are created in the <strong>Data view</strong> or <strong>Report view</strong>.",
    category: "Power Query",
    tags: ["Query Editor", "Power Query", "transform", "shape data", "ETL"]
  },
  {
    id: 9,
    question: "In which storage mode are tables solely stored in-memory and queries fulfilled by cached data?",
    options: ["Import", "DirectQuery", "Dual", "Native"],
    correctAnswer: 0,
    explanation: "<strong>Import</strong> — In Import storage mode, tables are stored entirely in-memory using the VertiPaq engine, and all queries are fulfilled by the cached data.<br><br><strong>DirectQuery</strong> tables are connected directly to the source — no data is cached. <strong>Dual</strong> storage mode allows tables to come from in-memory data or by an on-demand query to the data source, depending on the query context.",
    category: "Data Modeling",
    tags: ["Import", "storage mode", "in-memory", "VertiPaq", "cached data"]
  },
  {
    id: 10,
    question: "When should you use DirectQuery?",
    options: [
      "The source data never changes",
      "Company policy states no data source restrictions",
      "Dataset is too large to be stored in-memory",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "<strong>Dataset is too large to be stored in-memory.</strong><br><br>Use DirectQuery when:<br>• The dataset is <strong>too large</strong> to be stored in-memory<br>• The source data <strong>changes frequently</strong> and reports must show the most recent data<br>• Company policy states data can <strong>only be accessed from the original source</strong><br><br>If data never changes or there are no restrictions, Import mode is typically preferred for better performance.",
    category: "Data Connectivity",
    tags: ["DirectQuery", "large dataset", "in-memory", "storage mode", "performance"]
  },
  {
    id: 11,
    question: "How can you use parameters when connecting to data?",
    options: [
      "To connect to a JSON file",
      "To change data source values dynamically",
      "To create \"What-If\" scenarios",
      "To shape and transform data in the Query Editor"
    ],
    correctAnswer: 1,
    explanation: "<strong>To change data source values dynamically.</strong><br><br>Parameters are a useful way to <strong>change data source values dynamically</strong> in Power Query. These parameters are different from the <strong>\"What-If\" parameters</strong> created in the Power BI Desktop front-end. Power Query parameters let you dynamically adjust connection strings, file paths, and other source properties without hardcoding values.",
    category: "Power Query",
    tags: ["parameters", "Power Query", "dynamic", "data source", "connection"]
  },
  {
    id: 12,
    question: "Which of the following sources lets you connect your data to other business applications?",
    options: [
      "Microsoft Dataverse",
      "Microsoft Dataplatform",
      "Microsoft Dataflows",
      "Microsoft Excel"
    ],
    correctAnswer: 0,
    explanation: "<strong>Microsoft Dataverse.</strong><br><br>The Dataverse is a <strong>cloud-based storage option</strong> for your organization's data that you can connect to business applications like <strong>Power Apps</strong>, <strong>Power Automate</strong>, and <strong>Power Virtual Agents</strong>. It provides a secure, scalable data platform that integrates seamlessly with the Microsoft Power Platform ecosystem.",
    category: "Data Connectivity",
    tags: ["Dataverse", "business applications", "Power Platform", "cloud storage", "Power Apps"]
  },
  {
    id: 13,
    question: "You have a Microsoft Excel spreadsheet that contains a table named Sales. You need to add the Sales table to a Power BI dashboard as a tile. How should you configure the tile?",
    options: [
      "From the Power BI service, import the data from the Excel workbook.",
      "From Excel, publish the workbook to the Power BI service.",
      "From the Power BI tab in Excel, pin the table.",
      "From the Power BI service, upload the Excel workbook."
    ],
    correctAnswer: 2,
    explanation: "<strong>From the Power BI tab in Excel, pin the table.</strong><br><br>The <strong>Power BI Publisher for Excel</strong> add-in allows you to pin elements such as tables, charts, and ranges directly from Excel to a Power BI dashboard as tiles. This is the most direct way to add an Excel table to a dashboard without needing to import or publish the entire workbook.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/publisher-for-excel' target='_blank'>Power BI Publisher for Excel</a>",
    category: "Power BI Service",
    tags: ["Excel", "dashboard tile", "pin", "Power BI Publisher", "Power BI service"]
  },
  {
    id: 14,
    question: "You have two Microsoft SQL Server database servers named SQLProd and SQLDev. SQLDev contains the same tables as SQLProd, but only a subset of the data. You create a new Power BI Desktop model that uses 120 tables from SQLDev. You plan to publish the file to the Power BI service. You need to connect the model to the tables in SQLProd. The solution must minimize administrative effort. What should you do from Query Editor before you publish the model?",
    options: [
      "Create a new connection to SQLProd, and then import the tables from SQLProd.",
      "Delete the existing queries, and then add new data sources.",
      "Configure the Data source settings.",
      "Edit the source of each table query."
    ],
    correctAnswer: 2,
    explanation: "<strong>Configure the Data source settings.</strong><br><br>Both <strong>Data Source Settings</strong> (option C) and editing the source of each query (option D) can achieve this, but the question asks for the <strong>least administrative effort</strong>.<br><br>Using <strong>Query Editor → Data Source Settings</strong> lets you change the server name from SQLDev to SQLProd in <strong>one place</strong>, and it automatically applies to all 120 tables. Editing each table query individually would require repeating the change 120 times.<br><br>Reference: <a href='https://www.c-sharpcorner.com/article/how-to-change-data-source-of-existing-report-in-power-bi/' target='_blank'>How to Change Data Source in Power BI</a>",
    category: "Power Query",
    tags: ["Data source settings", "SQL Server", "Query Editor", "migration", "connection"]
  },
  {
    id: 15,
    question: "You plan to create several datasets by using the Power BI service. You have the following files:<br><br><table style='border-collapse:collapse;margin:8px 0;font-size:0.85em'><tr style='background:#2d3748;color:#fff'><th style='padding:6px 12px;border:1px solid #4a5568'>File</th><th style='padding:6px 12px;border:1px solid #4a5568'>Type</th><th style='padding:6px 12px;border:1px solid #4a5568'>Size</th><th style='padding:6px 12px;border:1px solid #4a5568'>Location</th></tr><tr><td style='padding:6px 12px;border:1px solid #e2e8f0'>Data 1</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>TSV</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>50 MB</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>Microsoft OneDrive</td></tr><tr><td style='padding:6px 12px;border:1px solid #e2e8f0'>Data 2</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>XLSX</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>3 GB</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>Local</td></tr><tr><td style='padding:6px 12px;border:1px solid #e2e8f0'>Data 3</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>XML</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>100 MB</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>OneDrive for Business</td></tr><tr><td style='padding:6px 12px;border:1px solid #e2e8f0'>Data 4</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>CSV</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>2 GB</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>Microsoft OneDrive</td></tr><tr><td style='padding:6px 12px;border:1px solid #e2e8f0'>Data 5</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>JPG</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>5 MB</td><td style='padding:6px 12px;border:1px solid #e2e8f0'>Local</td></tr></table><br>Which two files can be used as datasets? (Choose two)",
    options: [
      "Data 1 (TSV, 50 MB)",
      "Data 2 (XLSX, 3 GB)",
      "Data 3 (XML, 100 MB)",
      "Data 4 (CSV, 2 GB)",
      "Data 5 (JPG, 5 MB)"
    ],
    correctAnswer: [1, 3],
    multiSelect: true,
    explanation: "<strong>Data 2 (XLSX) and Data 4 (CSV).</strong><br><br>The Power BI service supports importing <strong>Excel (.xlsx)</strong> and <strong>CSV</strong> files directly as datasets.<br><br>• <strong>Data 1 (TSV)</strong> — Not supported directly via the Power BI service.<br>• <strong>Data 2 (XLSX, 3 GB)</strong> — ✅ Supported. Exceeds the 1 GB shared capacity limit, but works with <strong>Power BI Premium</strong>.<br>• <strong>Data 3 (XML)</strong> — Not supported directly. XML must be loaded into Excel or Power BI Desktop first.<br>• <strong>Data 4 (CSV, 2 GB)</strong> — ✅ Supported. Same as XLSX, works with Premium capacity.<br>• <strong>Data 5 (JPG)</strong> — Not a data file format; not supported.<br><br><em>Note: There's a 1 GB limit for datasets in shared capacities. Larger datasets require Power BI Premium.</em><br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-get-data' target='_blank'>Get Data in Power BI Service</a>",
    category: "Power BI Service",
    tags: ["datasets", "file types", "CSV", "XLSX", "Power BI service", "Premium"]
  },
  {
    id: 16,
    question: "You have a service published to a website. When you connect to the website, you receive the following XML data showing a service document with collections such as Categories, Customers, and Order_Details under a workspace with an Atom namespace (<code>xmlns:atom</code>) and a base URI pointing to a <code>.svc</code> endpoint.<br><br>You need to create a query that retrieves the Categories data and the Customers data.<br><br>Which type of source should you use?",
    options: [
      "JSON",
      "Text/CSV",
      "OData Feed",
      "XML"
    ],
    correctAnswer: 2,
    explanation: "<strong>OData Feed.</strong><br><br>The XML data shown in the image is a <strong>service document</strong> in the <strong>Atom format</strong>, which is the standard representation used by <strong>OData (Open Data Protocol)</strong> services.<br><br>Key indicators that this is an OData service:<br>• The namespace <code>http://www.w3.org/2007/app</code> — this is the <strong>Atom Publishing Protocol</strong> namespace used by OData.<br>• The <code>xmlns:atom=\"http://www.w3.org/2005/Atom\"</code> declaration.<br>• The <code>xml:base</code> pointing to a <strong>.svc</strong> endpoint (e.g., <code>Northwind.svc</code>), which is a WCF Data Services / OData endpoint.<br>• The <code>&lt;collection&gt;</code> elements listing entity sets like Categories, Customers, and Order_Details.<br><br>While the document is technically XML, using an <strong>XML source</strong> would not properly interpret the OData structure. The correct approach is to use the <strong>OData Feed</strong> connector in Power BI, which understands the service document and lets you navigate and select specific entity sets (tables).<br><br>OData supports two formats: the XML-based <strong>Atom format</strong> and <strong>JSON format</strong>.<br><br>Reference: <a href='https://www.odata.org/documentation/odata-version-2-0/atom-format/' target='_blank'>OData Atom Format Documentation</a>",
    category: "Data Connectivity",
    tags: ["OData", "Atom format", "XML", "data source", "Power Query", "connectors"]
  },
  {
    id: 17,
    question: "In Power BI Desktop, you are updating an existing report that connects to a Microsoft SQL Server database. You use database (SQL authentication) credentials to connect to the source. The last credentials that were entered are expired.<br><br>You need to update the credentials.<br><br>Which two actions should you perform?",
    options: [
      "Open the Data Source Settings dialog box and locate the data source.",
      "Select Edit Permissions and enter new credentials.",
      "Open the Get Data dialog box and make a new connection to the database.",
      "Open the Options dialog box and allow data previews to download in the background."
    ],
    correctAnswer: [0, 1],
    multiSelect: true,
    explanation: "<strong>Open the Data Source Settings dialog box and locate the data source + Select Edit Permissions and enter new credentials.</strong><br><br>When SQL authentication credentials expire in Power BI Desktop, you need to update them through the <strong>Data Source Settings</strong>:<br><br><strong>Step 1:</strong> Go to <strong>File → Options and settings → Data source settings</strong>. This opens the dialog where all configured data sources are listed. Locate the SQL Server data source.<br><br><strong>Step 2:</strong> Select the data source, then click <strong>Edit Permissions</strong>. Under <strong>Credentials</strong>, click <strong>Edit</strong> and enter the new SQL authentication username and password.<br><br>Why the other options are wrong:<br>• <strong>Option C (Get Data → new connection)</strong> — Making a new connection is unnecessary. The existing connection just needs updated credentials, not a new setup.<br>• <strong>Option D (Options → background previews)</strong> — This setting controls data preview behavior and has nothing to do with authentication credentials.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources' target='_blank'>Data Sources in Power BI Desktop</a>",
    category: "Data Connectivity",
    tags: ["SQL Server", "credentials", "Data Source Settings", "SQL authentication", "Power BI Desktop"]
  },
  {
    id: 18,
    question: "You plan to populate a table in a Power BI dataset with data from a Microsoft SharePoint Online list.<br><br>Which storage mode will be used?",
    options: [
      "DirectQuery",
      "Live connection",
      "Composite",
      "Import"
    ],
    correctAnswer: 3,
    explanation: "<strong>Import.</strong><br><br>When you connect to a <strong>SharePoint Online list</strong> in Power BI, the data is <strong>imported</strong> into the Power BI dataset. The SharePoint Online list connector does <strong>not support DirectQuery</strong> mode.<br><br>Why the other options are wrong:<br>• <strong>DirectQuery</strong> — Not available for SharePoint Online lists. DirectQuery is supported for sources like SQL Server, Azure SQL, SAP HANA, etc.<br>• <strong>Live connection</strong> — This applies only to <strong>Analysis Services</strong> (Azure AS or SSAS) and <strong>Power BI datasets</strong>, not SharePoint lists.<br>• <strong>Composite</strong> — Composite mode combines Import and DirectQuery tables in a single model. Since SharePoint lists only support Import, you cannot have a Composite model with just a SharePoint source.<br><br>With Import mode, the data is loaded into memory and must be <strong>refreshed</strong> to reflect changes from the SharePoint list.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-storage-mode' target='_blank'>Storage Mode in Power BI Desktop</a>",
    category: "Data Connectivity",
    tags: ["SharePoint Online", "Import mode", "storage mode", "DirectQuery", "data source"]
  },
  {
    id: 19,
    question: "Which data role enables advanced analytics capabilities through reports and visualizations?",
    options: [
      "Data analyst",
      "Data scientist",
      "Data engineer"
    ],
    correctAnswer: 0,
    explanation: "<strong>Data analyst.</strong><br><br>A <strong>data analyst</strong> enables businesses to maximize the value of their data assets by designing and building scalable data models, cleaning and transforming data, and delivering <strong>reports and visualizations</strong> for advanced analytics.<br><br>Why the other options are wrong:<br>• <strong>Data scientist</strong> — Focuses on applying advanced analytics techniques such as machine learning, statistical modeling, and AI to extract deeper insights. They work more with predictive models than with report visualizations.<br>• <strong>Data engineer</strong> — Responsible for designing, building, and managing the data infrastructure and pipelines. They ensure data is available and accessible but don't typically build reports and visualizations.<br><br>The data analyst role bridges the gap between data and decision-making through <strong>meaningful visualizations and reports</strong> in tools like Power BI.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/certifications/roles/data-analyst' target='_blank'>Data Analyst Role — Microsoft</a>",
    category: "Power BI Service",
    tags: ["data roles", "data analyst", "reports", "visualizations", "analytics"]
  },
  {
    id: 20,
    question: "Which data analyst task has critical performance impact on reporting and data analysis?",
    options: [
      "Analyze",
      "Visualize",
      "Model"
    ],
    correctAnswer: 2,
    explanation: "<strong>Model.</strong><br><br><strong>Data modeling</strong> has the most critical performance impact on reporting and data analysis. A well-designed data model directly affects:<br><br>• <strong>Query performance</strong> — Proper relationships, data types, and star schema design lead to faster DAX calculations and report rendering.<br>• <strong>Report responsiveness</strong> — Poorly modeled data (e.g., unnecessary columns, wrong cardinality, complex many-to-many relationships) causes slow visuals and timeouts.<br>• <strong>Data accuracy</strong> — Incorrect relationships or model design lead to wrong aggregations and misleading insights.<br><br>Why the other options have less performance impact:<br>• <strong>Analyze</strong> — Analysis tasks (writing DAX, using Q&A) depend on the model quality but don't define the performance foundation.<br>• <strong>Visualize</strong> — Visualization choices affect user experience but the underlying performance is determined by the data model.<br><br>A data analyst should prioritize building an <strong>optimized star schema model</strong> with proper relationships, minimal columns, and appropriate data types.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/guidance/star-schema' target='_blank'>Star Schema Design Guidance</a>",
    category: "Data Modeling",
    tags: ["data modeling", "performance", "star schema", "data analyst tasks", "optimization"]
  },
  {
    id: 21,
    question: "What is a key benefit of data analysis?",
    options: [
      "Decisive analytics",
      "Informed business decisions",
      "Complex reports"
    ],
    correctAnswer: 1,
    explanation: "<strong>Informed business decisions.</strong><br><br>The primary benefit of data analysis is enabling <strong>informed business decisions</strong>. By analyzing data, organizations can:<br><br>• Identify trends and patterns in business performance<br>• Make evidence-based decisions rather than relying on intuition<br>• Reduce risk by understanding data-driven insights<br>• Optimize operations and improve outcomes<br><br>Why the other options are wrong:<br>• <strong>Decisive analytics</strong> — This is not a recognized term or standard benefit of data analysis.<br>• <strong>Complex reports</strong> — While data analysis may produce reports, complexity is not a benefit — simplicity and clarity are.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/' target='_blank'>Data Analytics and Microsoft</a>",
    category: "Power BI Service",
    tags: ["data analysis", "business decisions", "benefits", "fundamentals"]
  },
  {
    id: 22,
    question: "What are the building blocks of Power BI?",
    options: [
      "Tiles, dashboards, databases, mobile devices",
      "Visual Studio, C#, and JSON files",
      "Datasets, Visualizations, Reports, Dashboards, and Tiles"
    ],
    correctAnswer: 2,
    explanation: "<strong>Datasets, Visualizations, Reports, Dashboards, and Tiles.</strong><br><br>The <strong>building blocks</strong> of Power BI are:<br><br>• <strong>Datasets</strong> — Collections of data used to create visualizations (from Excel, SQL, etc.)<br>• <strong>Visualizations (Visuals)</strong> — Visual representations of data such as charts, maps, and graphs<br>• <strong>Reports</strong> — Collections of visualizations on one or more pages<br>• <strong>Dashboards</strong> — Single-page canvases with tiles pinned from reports<br>• <strong>Tiles</strong> — Individual snapshots of visuals pinned to a dashboard<br><br>Why the other options are wrong:<br>• <strong>Option A</strong> — Databases and mobile devices are not building blocks of Power BI; they are external components.<br>• <strong>Option B</strong> — Visual Studio, C#, and JSON are development tools, not Power BI building blocks.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts' target='_blank'>Basic Concepts for Power BI Service</a>",
    category: "Power BI Service",
    tags: ["building blocks", "datasets", "visualizations", "reports", "dashboards", "tiles"]
  },
  {
    id: 23,
    question: "What is the common flow of activity in Power BI?",
    options: [
      "Bring data into Power BI Desktop and create a report, share it to the Power BI service, view and interact with reports and dashboards",
      "Bring data into Power BI mobile, create a report, then share it to Power BI Desktop",
      "Create a report in the Power BI service, share it to Power BI mobile, interact with it in Power BI Desktop",
      "Create a report in Power BI mobile, share it to the Power BI Desktop, view and interact in the Power BI service"
    ],
    correctAnswer: 0,
    explanation: "<strong>Bring data into Power BI Desktop → share to Power BI service → view and interact.</strong><br><br>The common flow of activity in Power BI follows three steps:<br><br><strong>1. Power BI Desktop</strong> — Connect to data sources, transform data, and create reports with visualizations.<br><strong>2. Power BI Service</strong> — Publish reports from Desktop to the cloud service, create dashboards, and share content with others.<br><strong>3. Power BI Mobile / Consumers</strong> — View and interact with reports and dashboards on any device.<br><br>Why the other options are wrong:<br>• <strong>Option B</strong> — You cannot create reports in Power BI mobile; it's for viewing only.<br>• <strong>Option C</strong> — While you can create some reports in the service, the common flow starts with Desktop.<br>• <strong>Option D</strong> — Power BI mobile is not a report authoring tool.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts' target='_blank'>Power BI Basic Concepts</a>",
    category: "Power BI Service",
    tags: ["workflow", "Power BI Desktop", "Power BI service", "Power BI mobile", "fundamentals"]
  },
  {
    id: 24,
    question: "A collection of ready-made visuals, pre-arranged in dashboards and reports is called what?",
    options: [
      "The canvas",
      "An app",
      "A dataset",
      "Scheduled refresh"
    ],
    correctAnswer: 1,
    explanation: "<strong>An app.</strong><br><br>In Power BI, an <strong>app</strong> is a collection of pre-built dashboards and reports bundled together and distributed to end users. Apps provide:<br><br>• <strong>Ready-made content</strong> — Pre-arranged visuals, reports, and dashboards packaged for consumption<br>• <strong>Easy distribution</strong> — Published to the organization or specific groups via AppSource or direct links<br>• <strong>Consistent experience</strong> — All users see the same curated set of content<br><br>Why the other options are wrong:<br>• <strong>The canvas</strong> — The canvas is the design surface in the report editor where you place visuals.<br>• <strong>A dataset</strong> — A dataset is the underlying data, not a collection of visuals.<br>• <strong>Scheduled refresh</strong> — This is a feature to automatically update data at specified intervals.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/consumer/end-user-apps' target='_blank'>Apps in Power BI</a>",
    category: "Power BI Service",
    tags: ["apps", "dashboards", "reports", "distribution", "Power BI service"]
  },
  {
    id: 25,
    question: "Which of the following sources contains sites, document libraries, and folders?",
    options: [
      "SharePoint Online",
      "Microsoft Dataverse",
      "Power BI Libraries",
      "Filing Cabinets"
    ],
    correctAnswer: 0,
    explanation: "<strong>SharePoint Online.</strong><br><br><strong>SharePoint Online</strong> organizes information into <strong>sites</strong>, <strong>document libraries</strong>, <strong>folders</strong>, and <strong>files</strong> within folders. This hierarchical structure makes it a common data source in Power BI:<br><br>• <strong>Sites</strong> — Top-level containers for team or project content<br>• <strong>Document libraries</strong> — Storage areas within sites for files<br>• <strong>Folders</strong> — Organizational units within document libraries<br><br>Why the other options are wrong:<br>• <strong>Microsoft Dataverse</strong> — Uses tables, columns, and rows — not sites and document libraries.<br>• <strong>Power BI Libraries</strong> — Not a recognized Power BI concept.<br>• <strong>Filing Cabinets</strong> — A physical storage concept, not a digital data source.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-sharepoint-online-list' target='_blank'>SharePoint Online List in Power BI</a>",
    category: "Data Connectivity",
    tags: ["SharePoint Online", "sites", "document libraries", "data source", "folders"]
  },
  {
    id: 26,
    question: "The primary data preparation tool in Power BI is called what?",
    options: [
      "Report editor",
      "Power Query editor",
      "Data editor"
    ],
    correctAnswer: 1,
    explanation: "<strong>Power Query editor.</strong><br><br>The <strong>Power Query editor</strong> is the primary data preparation and transformation tool in Power BI Desktop. It allows you to:<br><br>• <strong>Connect</strong> to various data sources<br>• <strong>Transform</strong> data — filter, merge, append, pivot, unpivot, split columns, change data types<br>• <strong>Clean</strong> data — remove errors, handle nulls, remove duplicates<br>• <strong>Shape</strong> data before loading it into the data model<br><br>Power Query uses the <strong>M language</strong> (Power Query Formula Language) behind the scenes and provides a visual, step-by-step approach to data preparation.<br><br>Why the other options are wrong:<br>• <strong>Report editor</strong> — Used for building visualizations and report layouts, not data preparation.<br>• <strong>Data editor</strong> — Not a recognized tool in Power BI.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview' target='_blank'>Query Overview in Power BI Desktop</a>",
    category: "Power Query",
    tags: ["Power Query", "data preparation", "transformation", "M language", "editor"]
  },
  {
    id: 27,
    question: "The process of shaping data by converting your flat data into a table that contains an aggregation value for each unique value in a column is called what?",
    options: [
      "Group by columns",
      "Pivot (pivoting a column)",
      "Manage aggregations"
    ],
    correctAnswer: 1,
    explanation: "<strong>Pivot (pivoting a column).</strong><br><br><strong>Pivoting</strong> a column transforms flat (row-based) data into a summarized table by:<br><br>• Taking unique values from a column and turning them into <strong>new column headers</strong><br>• Aggregating the corresponding values (sum, count, average, etc.) for each unique value<br>• Converting a long/narrow table into a wide/short format<br><br>Example: A sales table with rows for each product and month can be pivoted so each month becomes a column header, with aggregated sales values in the cells.<br><br>Why the other options are wrong:<br>• <strong>Group by columns</strong> — Groups rows and applies aggregations but keeps the same column structure (doesn't rotate columns).<br>• <strong>Manage aggregations</strong> — Refers to defining aggregation tables for DirectQuery optimization, not data shaping.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-query/pivot-columns' target='_blank'>Pivot Columns in Power Query</a>",
    category: "Power Query",
    tags: ["pivot", "data shaping", "aggregation", "Power Query", "transformation"]
  },
  {
    id: 28,
    question: "What can be achieved by removing unnecessary rows and columns?",
    options: [
      "It is not necessary to delete unnecessary rows and columns and it is a good practice to keep all metadata intact.",
      "Deleting unnecessary rows and columns can damage the structure of the data model.",
      "Deleting unnecessary rows and columns will reduce the dataset size and it is a good practice to load only necessary data into your data model."
    ],
    correctAnswer: 2,
    explanation: "<strong>Reducing dataset size and loading only necessary data.</strong><br><br>Removing unnecessary rows and columns is a <strong>best practice</strong> in Power BI data preparation because:<br><br>• <strong>Reduces dataset size</strong> — Smaller datasets load faster and consume less memory<br>• <strong>Improves performance</strong> — Fewer columns mean faster DAX calculations and report rendering<br>• <strong>Simplifies the model</strong> — A cleaner model is easier to understand and maintain<br>• <strong>Reduces refresh time</strong> — Less data to process during scheduled refreshes<br><br>Why the other options are wrong:<br>• <strong>Option A</strong> — Keeping all metadata is not a good practice. Unnecessary metadata adds bloat without value.<br>• <strong>Option B</strong> — Properly removing unneeded rows/columns does not damage the model — it strengthens it.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction' target='_blank'>Data Reduction Techniques</a>",
    category: "Power Query",
    tags: ["data reduction", "best practices", "performance", "optimization", "data preparation"]
  },
  {
    id: 29,
    question: "How many rows does Power Query scan to detect the type of data in the columns?",
    options: [
      "10,000",
      "1,000",
      "100"
    ],
    correctAnswer: 1,
    explanation: "<strong>1,000 rows.</strong><br><br>By default, Power Query scans the <strong>first 1,000 rows</strong> of data to automatically detect column data types. This is important to understand because:<br><br>• If the first 1,000 rows contain only numbers but later rows contain text, the auto-detected type may be wrong<br>• You may need to <strong>manually set data types</strong> when the first 1,000 rows are not representative of the full dataset<br>• Data type detection affects how Power Query applies transformations and how the data loads into the model<br><br>Why the other options are wrong:<br>• <strong>10,000</strong> — Too many; Power Query only scans 1,000 for type detection.<br>• <strong>100</strong> — Too few; Power Query scans more rows than this for reliable detection.<br><br><em>Tip: Always verify auto-detected data types, especially for large datasets where data patterns may change beyond the first 1,000 rows.</em><br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-query/data-types' target='_blank'>Data Types in Power Query</a>",
    category: "Power Query",
    tags: ["data types", "auto-detection", "1000 rows", "Power Query", "data preparation"]
  },
  {
    id: 30,
    question: "Data profiling is defined as what?",
    options: [
      "Aggregating columns containing numeric data",
      "Studying the nuances of the data",
      "Data modeling"
    ],
    correctAnswer: 1,
    explanation: "<strong>Studying the nuances of the data.</strong><br><br><strong>Data profiling</strong> is the process of examining and understanding the characteristics of your data. In Power Query, data profiling tools help you:<br><br>• <strong>Column quality</strong> — Shows the percentage of valid, error, and empty values<br>• <strong>Column distribution</strong> — Displays the count of distinct and unique values<br>• <strong>Column profile</strong> — Provides detailed statistics (min, max, average, standard deviation, value distribution chart)<br><br>Data profiling helps you identify:<br>• Missing or null values<br>• Data quality issues and errors<br>• Outliers and unexpected patterns<br>• Distribution of values across columns<br><br>Why the other options are wrong:<br>• <strong>Aggregating columns</strong> — This is a transformation step, not data profiling.<br>• <strong>Data modeling</strong> — This involves designing relationships and schema, not examining data characteristics.<br><br><em>Note: By default, Power Query profiles only the first 1,000 rows. Change to \"Column profiling based on entire dataset\" in the status bar for full analysis.</em><br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-query/data-profiling-tools' target='_blank'>Data Profiling Tools in Power Query</a>",
    category: "Power Query",
    tags: ["data profiling", "column quality", "column distribution", "Power Query", "data analysis"]
  },
  {
    id: 31,
    question: "What is the risk of having null values in a numeric column?",
    options: [
      "DAX expressions that MAX data will be incorrect",
      "DAX expressions that SUM data will be incorrect",
      "DAX expressions that AVERAGE data will be incorrect"
    ],
    correctAnswer: 2,
    explanation: "<strong>DAX expressions that AVERAGE data will be incorrect.</strong><br><br>Null values in a numeric column pose a risk specifically for <strong>AVERAGE</strong> calculations because of how DAX handles nulls:<br><br>• <strong>AVERAGE</strong> — Skips null/blank values entirely. This means the denominator (count of values) is reduced, potentially inflating the average. For example, if you have values 10, 20, null, 30 — the average is (10+20+30)/3 = 20, not (10+20+0+30)/4 = 15.<br><br>Why the other options are less affected:<br>• <strong>MAX</strong> — Ignores nulls and returns the maximum of existing values. The result is still correct because null is not a valid numeric comparison.<br>• <strong>SUM</strong> — Treats null as 0 (skips it). The sum of existing values is still accurate since adding nothing doesn't change the total.<br><br>The key distinction is that AVERAGE's result <strong>changes meaning</strong> when nulls are present because it affects the count of rows used in the calculation.<br><br><em>Best Practice: Replace nulls with 0 (or an appropriate default) if they represent actual zero values, to ensure AVERAGE calculations reflect the true mean.</em><br><br>Reference: <a href='https://learn.microsoft.com/en-us/dax/average-function-dax' target='_blank'>AVERAGE Function (DAX)</a>",
    category: "Data Modeling",
    tags: ["null values", "AVERAGE", "DAX", "data quality", "numeric columns"]
  },
  {
    id: 32,
    question: "What functionality lets you see the code that is generated as part of each transformation step?",
    options: [
      "Advanced editor",
      "Data profiling",
      "Queries pane"
    ],
    correctAnswer: 0,
    explanation: "<strong>Advanced editor.</strong><br><br>The <strong>Advanced Editor</strong> in Power Query lets you see and edit the full M code (Power Query formula language) that is generated behind the scenes for every transformation step you create.<br><br>When you apply transformations through the UI (rename columns, filter rows, change types, etc.), Power Query auto-generates M code for each step. The Advanced Editor shows all of this code in a single view, allowing you to:<br><br>• View the complete query logic<br>• Edit or optimize the generated code<br>• Add custom M expressions<br>• Debug transformation issues<br><br>Why the other options are wrong:<br>• <strong>Data profiling</strong> — Shows statistics about your data (column quality, distribution, profile), not the transformation code.<br>• <strong>Queries pane</strong> — Displays the list of queries in your project, not the code behind each step.<br><br>Reference: <a href='https://learn.microsoft.com/en-us/power-query/power-query-quickstart-using-power-bi#the-advanced-editor' target='_blank'>Advanced Editor in Power Query</a>",
    category: "Power Query",
    tags: ["Advanced Editor", "M code", "transformation steps", "Power Query"]
  },
  {
    id: 33,
    question: "You have a prospective customer list that contains 1,500 rows of data. The list contains the following fields:<br>- First name<br>- Last name<br>- Email address<br>- State/Region<br>- Phone number<br><br>You import the list into Power Query Editor.<br>You need to ensure that the list contains records for each State/Region to which you want to target a marketing campaign.<br><br>Which two actions should you perform?",
    options: [
      "Open the Advanced Editor.",
      "Select Column quality.",
      "Enable Column profiling based on entire dataset.",
      "Select Column distribution.",
      "Select Column profile."
    ],
    correctAnswer: [2, 4],
    multiSelect: true,
    explanation: "<strong>Enable Column profiling based on entire dataset</strong> and <strong>Select Column profile.</strong><br><br>This is a two-step process:<br><br><strong>Step 1: Enable Column profiling based on entire dataset</strong><br>By default, Power Query profiles only the <strong>first 1,000 rows</strong>. Since the dataset has 1,500 rows, you must first change the profiling setting (in the status bar at the bottom of Power Query Editor) to \"Column profiling based on entire dataset.\" Otherwise, you would miss data from 500 rows.<br><br><strong>Step 2: Select Column profile</strong><br>Column profile provides <strong>detailed statistics</strong> including value distribution, count of distinct values, count of unique values, min, max, and a value distribution chart. This allows you to see all the distinct State/Region values and verify that all target regions are represented.<br><br>Why the other options are wrong:<br>• <strong>Advanced Editor</strong> — Shows M code, not data distribution.<br>• <strong>Column quality</strong> — Shows valid/error/empty percentages, not the actual values in the column.<br>• <strong>Column distribution</strong> — Shows distinct and unique counts as a bar chart but doesn't provide the detailed value breakdown that Column profile does.<br><br>References:<br><a href='https://www.poweredsolutions.co/2019/08/13/data-profiling-quality-distribution-in-power-bi-power-query/' target='_blank'>Data Profiling in Power BI</a><br><a href='https://www.altentertraining.com/microsoft/power-bi/column-profiling-is-good/' target='_blank'>Column Profiling in Power BI</a>",
    category: "Power Query",
    tags: ["column profiling", "entire dataset", "column profile", "data profiling", "Power Query", "marketing"]
  },
  {
    id: 34,
    question: "You have a CSV file that contains user complaints. The file contains a column named Logged. Logged contains the date and time each complaint occurred. The data in Logged is in the following format: 2018-12-31 at 08:59.<br><br>You need to be able to analyze the complaints by the logged date and use a built-in date hierarchy.<br><br>What should you do?",
    options: [
      "Change the data type of the Logged column to Date.",
      "Apply the Parse function from the Date transformations options to the Logged column.",
      "Create a column by example that starts with 2018-12-31 and set the data type of the new column to Date.",
      "Apply a transform to extract the first 11 characters of the Logged column."
    ],
    correctAnswer: 2,
    explanation: "<strong>Create a column by example that starts with 2018-12-31 and set the data type of the new column to Date.</strong><br><br>The Logged column contains values like \"2018-12-31 at 08:59\" which is <strong>not a standard date/time format</strong> — the \" at \" text makes it unparseable by standard type conversion.<br><br>• <strong>Column by example</strong> — Power Query's \"Add Column from Examples\" feature is smart enough to detect the pattern. When you type \"2018-12-31\" as an example, it will extract just the date portion from all rows. Then you set the data type to Date to enable the built-in date hierarchy (Year > Quarter > Month > Day).<br><br>Why the other options are wrong:<br>• <strong>Change data type to Date</strong> — Will fail because \"2018-12-31 at 08:59\" is not a recognized date format.<br>• <strong>Parse function</strong> — The Parse date transformation expects a recognizable date string, which this is not.<br>• <strong>Extract first 11 characters</strong> — \"2018-12-31 \" is 11 characters (with trailing space). While close, the Extract option would give you a text value, not a Date. Also, the correct transformation would be Split, not Extract.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-add-column-from-example' target='_blank'>Add Column from Examples</a><br><a href='https://www.exceljetconsult.com.ng/home/blog/power-query-split-date-and-time-into-separate-columns/' target='_blank'>Split Date and Time in Power Query</a>",
    category: "Power Query",
    tags: ["column from examples", "date hierarchy", "date transformation", "CSV", "Power Query"]
  },
  {
    id: 35,
    question: "You create the following step by using Power Query Editor:<br><code>Table.ReplaceValue(SalesLT_Address,\"1318\",\"1319\",Replacer.ReplaceText,{\"AddressLine1\"})</code><br><br>A row has a value of <strong>21318 Lasalle Street</strong> in the AddressLine1 column.<br><br>What will the value be when the step is applied?",
    options: [
      "1318",
      "1319",
      "21318 Lasalle Street",
      "21319 Lasalle Street"
    ],
    correctAnswer: 3,
    explanation: "<strong>21319 Lasalle Street</strong><br><br>The key here is the use of <code>Replacer.ReplaceText</code> vs <code>Replacer.ReplaceValue</code>:<br><br>• <strong>Replacer.ReplaceText</strong> — Performs a <strong>substring/partial match</strong>. It finds \"1318\" anywhere within the text and replaces just that portion. So \"2<strong>1318</strong> Lasalle Street\" becomes \"2<strong>1319</strong> Lasalle Street\".<br><br>• <strong>Replacer.ReplaceValue</strong> — Would perform an <strong>exact/whole-value match</strong>. It would only replace if the entire cell value was exactly \"1318\". Since the value is \"21318 Lasalle Street\", it would not match and the value would remain unchanged.<br><br>This is a critical distinction in Power Query's M language. <code>Replacer.ReplaceText</code> acts like a find-and-replace within the string, while <code>Replacer.ReplaceValue</code> acts like an exact match replacement.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/powerquery-m/table-replacevalue' target='_blank'>Table.ReplaceValue - Power Query M</a>",
    category: "Power Query",
    tags: ["Table.ReplaceValue", "Replacer.ReplaceText", "M code", "Power Query", "text replacement"]
  },
  {
    id: 36,
    question: "You have a Microsoft SharePoint Online site that contains several document libraries.<br>One of the document libraries contains manufacturing reports saved as Microsoft Excel files. All the manufacturing reports have the same data structure.<br><br>You need to use Power BI Desktop to load only the manufacturing reports to a table for analysis.<br><br>What should you do?",
    options: [
      "Get data from a SharePoint Online folder, enter the site URL, and then select Combine & Load.",
      "Get data from a SharePoint Online list and enter the site URL. Select Combine & Transform, then filter by the folder path to the manufacturing reports library.",
      "Get data from a SharePoint Online folder and enter the site URL. Select Combine & Transform, then filter by the folder path to the manufacturing reports library.",
      "Get data from a SharePoint Online list, enter the site URL, and then select Combine & Load."
    ],
    correctAnswer: 2,
    explanation: "<strong>Get data from a SharePoint Online folder and enter the site URL. Select Combine & Transform, then filter by the folder path to the manufacturing reports library.</strong><br><br>This is the correct approach because:<br><br>• <strong>SharePoint Online folder</strong> connector — This is the right connector for accessing files (Excel, CSV, etc.) stored in SharePoint document libraries. It returns a list of all files across all libraries on the site.<br><br>• <strong>Combine & Transform</strong> — This opens Power Query Editor where you can filter and manipulate the data before loading. Since the site has multiple document libraries, you need to filter by the folder path to isolate only the manufacturing reports library.<br><br>Why the other options are wrong:<br>• <strong>SharePoint Online folder + Combine & Load</strong> — This would load ALL files from ALL libraries without giving you a chance to filter to just the manufacturing reports.<br>• <strong>SharePoint Online list</strong> — This connector is for SharePoint lists (structured data in rows/columns), not for document libraries containing files. It wouldn't give you access to Excel files stored in libraries.<br><br>Reference: <a href='https://www.c-sharpcorner.com/article/combine-and-transform-data-of-multiple-files-located-in-a-folder-in-power-bi/' target='_blank'>Combine and Transform Files from a Folder in Power BI</a>",
    category: "Power Query",
    tags: ["SharePoint Online", "folder connector", "Combine & Transform", "document library", "Excel files"]
  },
  {
    id: 37,
    question: "You view a query named Transactions as shown in the following exhibit.<br><br><img src='images/q037-exhibit-1.jpg' alt='Question 37 Exhibit - Power Query Editor showing Transactions query' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><img src='images/q037-exhibit-2.png' alt='Question 37 Answer Area' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>The query gets CSV files from a folder.<br>Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.<br><br><strong>Statement 1:</strong> There are [answer choice] CSV files.<br><strong>Statement 2:</strong> Removing duplicates based on the Date column will reduce the dataset to [answer choice] rows.",
    options: [
      "Box 1: 9 — Box 2: 10",
      "Box 1: 10 — Box 2: 9",
      "Box 1: 9 — Box 2: 90",
      "Box 1: 90 — Box 2: 10"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: 9 CSV files — Box 2: 10 rows</strong><br><br><strong>Box 1: There are 9 CSV files</strong><br>The <strong>Source.Name</strong> column shows the file names from which each row originated. The column distribution shows <strong>9 distinct, 0 unique</strong> values. This means there are 9 different CSV file names (e.g., Transactions201801.csv, etc.), and since 0 are unique, each file name appears more than once (multiple rows per file).<br><br><strong>Box 2: Removing duplicates on Date reduces to 10 rows</strong><br>The <strong>Date</strong> column shows <strong>10 distinct, 0 unique</strong> values. When you remove duplicates based on a column, Power Query keeps only one row per distinct value. Since there are 10 distinct dates, removing duplicates will reduce the dataset from 90 rows to <strong>10 rows</strong>.<br><br>Key concepts:<br>• <strong>Distinct</strong> = total number of different values in the column<br>• <strong>Unique</strong> = values that appear exactly once<br>• <strong>Remove duplicates</strong> = keeps one row per distinct value<br><br><em>Note: The Column statistics panel (Count: 90, Distinct: 10) confirms the Date column has 90 total values with 10 distinct dates.</em>",
    category: "Power Query",
    tags: ["column distribution", "distinct values", "remove duplicates", "CSV folder", "data profiling", "Power Query"]
  },
  {
    id: 38,
    question: "Which data profiling tools does Power Query have?",
    options: [
      "Column from examples, custom column, and conditional column",
      "Column quality, distribution, and profile",
      "Index column and duplicate column",
      "Format, extract, and parse"
    ],
    correctAnswer: 1,
    explanation: "<strong>Column quality, distribution, and profile</strong><br><br>The <strong>VIEW</strong> tab in Power Query Editor includes data profiling tools: <strong>Column quality</strong>, <strong>Column distribution</strong>, and <strong>Column profile</strong>. These help you understand the composition and quality of your data before loading it into the model.<br><br>The other options (column from examples, custom column, conditional column, index column, format, extract, parse) are all transformation tools found under the <strong>Add Column</strong> or <strong>Transform</strong> tabs — not data profiling tools.",
    category: "Power Query",
    tags: ["data profiling", "column quality", "column distribution", "column profile", "Power Query", "VIEW tab"]
  },
  {
    id: 39,
    question: "Which data profiling tool can you use to check the number of errors in a column?",
    options: [
      "Column quality",
      "Column distribution",
      "Column profile",
      "Column quality & column profile"
    ],
    correctAnswer: 3,
    explanation: "<strong>Column quality &amp; column profile</strong><br><br><strong>Column quality</strong> shows the percentage of values within a column that are valid, have errors, or are empty. <strong>Column profile</strong> provides this information in the column statistics as well, showing error count and other detailed metrics.<br><br><strong>Column distribution</strong> only shows the distribution of distinct and unique values — it does not surface error counts.",
    category: "Power Query",
    tags: ["data profiling", "column quality", "column profile", "errors", "Power Query"]
  },
  {
    id: 40,
    question: "What is the purpose of data profiling in Power Query?",
    options: [
      "Provide a visual way to explore data",
      "Get a sense of your dataset composition",
      "To solve column quality issues",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "<strong>All of the above</strong><br><br>Data profiling tools like <strong>column quality</strong>, <strong>column distribution</strong>, and <strong>column profile</strong> provide a visual way to explore data and get a sense of your dataset composition, while the contextual menus allow you to solve column quality issues (e.g., removing errors, replacing values, filtering blanks).",
    category: "Power Query",
    tags: ["data profiling", "column quality", "column distribution", "column profile", "Power Query", "data exploration"]
  },
  {
    id: 41,
    question: "Which data profiling tool provides detailed column statistics and value distribution for a selected column?",
    options: [
      "Column quality",
      "Column distribution",
      "Column profile",
      "Column statistics"
    ],
    correctAnswer: 2,
    explanation: "<strong>Column profile</strong><br><br>Column profile provides a more holistic view of data within a selected column by providing a sample distribution of the data and detailed column statistics (e.g., count, error count, min, max, distinct, unique).<br><br><strong>Column quality</strong> only shows valid/error/empty percentages. <strong>Column distribution</strong> shows distinct and unique value counts. <strong>Column statistics</strong> is not a standalone tool in Power Query.",
    category: "Power Query",
    tags: ["data profiling", "column profile", "column statistics", "Power Query", "value distribution"]
  },
  {
    id: 42,
    question: "When would you use a tool from the Transform tab over the Add Column tab?",
    options: [
      "When you want to overwrite the values of existing columns",
      "When you want to keep the values of existing columns",
      "When you want to create new columns",
      "Both B & C"
    ],
    correctAnswer: 0,
    explanation: "<strong>When you want to overwrite the values of existing columns</strong><br><br>The <strong>Transform</strong> tab includes tools to modify existing columns by overwriting their values in place. The <strong>Add Column</strong> tab, on the other hand, creates new columns while keeping the original columns unchanged. If you need to preserve the original data, use Add Column; if you want to replace the original values, use Transform.",
    category: "Power Query",
    tags: ["Transform tab", "Add Column tab", "Power Query", "overwrite", "modify columns"]
  },
  {
    id: 43,
    question: "What can be useful to create unique IDs and form relationships between tables?",
    options: [
      "Adding a column from examples",
      "Grouping data",
      "Adding an index column",
      "Appending queries"
    ],
    correctAnswer: 2,
    explanation: "<strong>Adding an index column</strong><br><br>Index columns contain a list of sequential values that can be used to identify each unique row in a table, which is why they are often used to create unique IDs and form relationships between tables.<br><br><strong>Column from examples</strong> derives new columns based on example patterns. <strong>Grouping data</strong> aggregates rows. <strong>Appending queries</strong> stacks rows from multiple tables.",
    category: "Power Query",
    tags: ["index column", "unique ID", "relationships", "Power Query", "Add Column"]
  },
  {
    id: 44,
    question: "Based on the conditional column below, what Price Range value would be given to a Unit_Price of 500?<br><br><img src='images/q044-exhibit.png' alt='Question 44 Exhibit - Conditional Column dialog' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Low",
      "Mid",
      "High",
      "Unclassified"
    ],
    correctAnswer: 1,
    explanation: "<strong>Mid</strong><br><br>Conditional columns allow you to define new fields based on logical rules (IF statements). In this example, the value of 500 is greater than 100 but less than 1000, which is why the output is \"Mid\".",
    category: "Power Query",
    tags: ["conditional column", "IF statement", "Power Query", "Add Column", "logical rules"]
  },
  {
    id: 45,
    question: "Which Power Query tool can you use when you know the outcome of a column you want but don't know which transformation(s) to use?",
    options: [
      "Column from examples",
      "Conditional column",
      "Custom column",
      "Index column"
    ],
    correctAnswer: 0,
    explanation: "<strong>Column from examples</strong><br><br>Columns from examples allow you to add new columns by providing an example value. Power Query then figures out which transformation(s) to apply to produce the desired result across all rows.<br><br><strong>Conditional column</strong> requires you to define explicit IF/THEN rules. <strong>Custom column</strong> requires you to write an M formula. <strong>Index column</strong> simply adds sequential numbers.",
    category: "Power Query",
    tags: ["column from examples", "transformation", "Power Query", "Add Column"]
  },
  {
    id: 46,
    question: "Which Power Query tool can you use to roll-up daily transaction data into monthly transactions?",
    options: [
      "Merging Queries",
      "Appending Queries",
      "Group By",
      "Pivot Columns"
    ],
    correctAnswer: 2,
    explanation: "<strong>Group By</strong><br><br>Group By allows you to aggregate your data at a different level (like daily data into monthly). You can group by a date column (e.g., month) and apply aggregation functions like Sum, Count, or Average to roll up the data.<br><br><strong>Merging</strong> joins tables side by side. <strong>Appending</strong> stacks tables vertically. <strong>Pivot Columns</strong> turns row values into column headers.",
    category: "Power Query",
    tags: ["Group By", "aggregation", "Power Query", "roll-up", "monthly"]
  },
  {
    id: 47,
    question: "You work as an analyst at Cat Slacks and you've just been handed a CSV file with yearly sales by department. After connecting to it in Power BI, you notice that each year has its own column. Which Power Query tool can you use to turn the multiple \"Year\" columns into rows?",
    options: [
      "Pivot",
      "Unpivot",
      "Transpose",
      "Group By"
    ],
    correctAnswer: 1,
    explanation: "<strong>Unpivot</strong><br><br>\"Pivoting\" is a fancy way to describe the process of turning distinct row values into columns (<strong>pivoting</strong>) or turning columns into rows (<strong>unpivoting</strong>). Since each year has its own column and you want to turn them into rows, <strong>Unpivot</strong> is the correct tool.<br><br><strong>Transpose</strong> flips the entire table (rows become columns and vice versa). <strong>Group By</strong> aggregates data.",
    category: "Power Query",
    tags: ["unpivot", "pivot", "Power Query", "columns to rows", "transformation"]
  },
  {
    id: 48,
    question: "Which of these operations adds rows to an existing table?",
    options: [
      "Group By",
      "Pivoting",
      "Merging queries",
      "Appending queries"
    ],
    correctAnswer: 3,
    explanation: "<strong>Appending queries</strong><br><br>Appending queries allows you to combine (or stack) tables that share the exact same column structure and data types, which adds rows to the existing table.<br><br><strong>Group By</strong> reduces rows through aggregation. <strong>Pivoting</strong> restructures data. <strong>Merging queries</strong> joins tables side by side (adds columns, not rows).",
    category: "Power Query",
    tags: ["append", "combine tables", "Power Query", "add rows", "stack"]
  },
  {
    id: 49,
    question: "What happens \"under the hood\" whenever you apply a transformation in Power Query?",
    options: [
      "The same transformation is applied to the source data",
      "The changes are permanent and cannot be modified",
      "The Query Editor writes the corresponding DAX code for the applied step",
      "The Query Editor writes the corresponding M code for the applied step"
    ],
    correctAnswer: 3,
    explanation: "<strong>The Query Editor writes the corresponding M code for the applied step</strong><br><br>Data Mashup, or <strong>M code</strong>, is the formula language that drives Power Query. Whenever you use UI tools to apply a transformation, the corresponding M code is automatically generated. Power Query transformations are <em>non-destructive</em> — they do not modify the source data, and each step can be edited or removed.",
    category: "Power Query",
    tags: ["M code", "Power Query", "transformation", "formula language", "under the hood"]
  },
  {
    id: 50,
    question: "Which two blocks make up the M code that runs your query?",
    options: [
      "do & while",
      "if & then",
      "for & each",
      "let & in"
    ],
    correctAnswer: 3,
    explanation: "<strong>let &amp; in</strong><br><br>Opening the Advanced Editor allows you to see the M code that makes up your query, which consists of two blocks: <strong>let</strong> (the definition of all variables/steps) and <strong>in</strong> (the output of your query — typically the last step variable).",
    category: "Power Query",
    tags: ["M code", "let", "in", "Advanced Editor", "Power Query"]
  },
  {
    id: 51,
    question: "During your data QA process, you notice that there are null values in the Return type column (Returned, No return, and null). After talking with your manager, you decide to impute (replace) the null values with a value of \"No return\". Which of the following actions should you take?",
    options: [
      "Select the Return type column > Transform > Replace values",
      "Select the Return type column > Transform > Fill down",
      "Select the Return type column > Add column > Column from example",
      "Select the Return type column > Home > Remove rows"
    ],
    correctAnswer: 0,
    explanation: "<strong>Select the Return type column &gt; Transform &gt; Replace values</strong><br><br>The <strong>Replace Values</strong> tool under the Transform tab allows you to find a specific value (including <code>null</code>) and replace it with another value. This is the correct approach for imputing null values.<br><br><strong>Fill down</strong> copies the last non-null value downward. <strong>Column from example</strong> creates a new column. <strong>Remove rows</strong> would delete the rows entirely instead of replacing the nulls.",
    category: "Power Query",
    tags: ["Replace values", "null", "impute", "Power Query", "Transform", "data QA"]
  },
  {
    id: 52,
    question: "You manage a Power BI model that has two tables named Sales and Product. You need to ensure that a sales team can view only data that has a CountryRegionName value of United States and a ProductCategory value of Clothing.<br><br>What should you do from Power BI Desktop?",
    options: [
      "Add the following filters to a report: CountryRegionName is United States, ProductCategory is Clothing",
      "From Power BI Desktop, create a new role that has the following filters: [CountryRegionName] = \"United States\" [ProductCategory] = \"Clothing\"",
      "Add the following filters in Query Editor: CountryRegionName is United States, ProductCategory is Clothing",
      "From Power BI Desktop, create a new role that has the following filter: [CountryRegionName] = \"United States\" && [ProductCategory] = \"Clothing\""
    ],
    correctAnswer: 1,
    explanation: "<strong>Create a new role with two separate filters</strong><br><br>You need to use <strong>Row-Level Security (RLS)</strong> to restrict what the sales team can see. Since the filters apply to two <em>different</em> tables (Sales for CountryRegionName and Product for ProductCategory), you must create <strong>two separate filter expressions</strong> — one per table.<br><br>Why not option D? You can't filter two columns from two <strong>different tables</strong> using <code>&&</code>. The <code>&&</code> operator only works when filtering columns in the <strong>same table</strong>.<br><br>Report-level filters (option A) and Query Editor filters (option C) do not provide security — users can modify or remove them.",
    category: "Security & Admin",
    tags: ["RLS", "Row-Level Security", "roles", "filters", "Power BI Desktop", "security"]
  },
  {
    id: 53,
    question: "You have a table named Sales that contains sales data for the United States. A sample of the data in Sales is shown below.<br><br><img src='images/q053-exhibit.png' alt='Question 53 Exhibit - Sales table sample data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>When you attempt to create a map that shows SalesAmount by Zone, you discover that the map shows a bubble based on cities instead of states. You need to ensure that the map shows bubbles based on states.<br><br>What should you do?",
    options: [
      "Add a column named Country that contains United States as the value.",
      "Add a column for longitude and a column for latitude.",
      "Select the Zone field. From the Modeling tab, change the Data Category.",
      "Select the Zone field. From the Modeling tab, change the Data Type."
    ],
    correctAnswer: 2,
    explanation: "<strong>Select the Zone field. From the Modeling tab, change the Data Category.</strong><br><br>This is a common problem when the data in your location field is ambiguous, such as using an area name like \"Washington\", which could indicate a state or a district.<br><br>One way to resolve the location data problem is to rename your column to be more specific, such as \"State\". Another way is to manually reset the <strong>Data Category</strong> by selecting it on the <strong>Modeling tab</strong>. From the Data Category list, you can assign a category to your data such as \"State\" or \"City\".<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/guided-learning/visualizations#step-5' target='_blank'>Power BI Visualizations - Data Categories</a>",
    category: "Data Modeling",
    tags: ["Data Category", "map", "Modeling tab", "geographic data", "zone", "state"]
  },
  {
    id: 54,
    question: "You have a query that retrieves data from a Microsoft Azure SQL database. You discover that a column named ErrorCode has several values starting with a space character, and a column named SubStatus contains several non-printable characters. You need to remove all the leading whitespaces from ErrorCode and all the non-printable characters from SubStatus. All other data must be retained.<br><br>What should you do on each column?<br><br><img src='images/q054-exhibit.png' alt='Question 54 Exhibit - ErrorCode and SubStatus columns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Trim and Clean",
      "Clean and Trim",
      "Replace values and Remove errors",
      "Remove errors and Replace values"
    ],
    correctAnswer: 0,
    explanation: "<strong>Trim and Clean</strong><br><br>• <strong>Trim</strong> removes leading and trailing whitespace characters from a text value. Use this on the <strong>ErrorCode</strong> column to remove the leading spaces.<br>• <strong>Clean</strong> removes all non-printable characters from a text value. Use this on the <strong>SubStatus</strong> column to remove the non-printable characters.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/powerquery-m/text-trim' target='_blank'>Text.Trim - Power Query M</a><br><a href='https://docs.microsoft.com/en-us/powerquery-m/text-clean' target='_blank'>Text.Clean - Power Query M</a>",
    category: "Power Query",
    tags: ["Trim", "Clean", "whitespace", "non-printable", "Power Query", "Transform", "Azure SQL"]
  },
  {
    id: 55,
    question: "From Power BI Desktop, you create a query that imports the following table.<br><br><img src='images/q055-exhibit-1.png' alt='Question 55 Exhibit - Original table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to configure the table to appear as shown in the following table:<br><br><img src='images/q055-exhibit-2.png' alt='Question 55 Exhibit - Expected result' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>What should you do?",
    options: [
      "From the Format menu, click Trim.",
      "From the Extract menu, click Last Characters.",
      "From the Split Column menu, click By Delimiter.",
      "From the Extract menu, click Text After Delimiter."
    ],
    correctAnswer: 3,
    explanation: "<strong>From the Extract menu, click Text After Delimiter.</strong><br><br>You need to end up with one column containing only the text after the delimiter. The <strong>Text After Delimiter</strong> option in the Extract menu extracts the portion of text that appears after a specified delimiter, removing the part you are not interested in.<br><br><strong>Trim</strong> only removes whitespace. <strong>Last Characters</strong> extracts a fixed number of characters from the end. <strong>Split Column by Delimiter</strong> would create two columns instead of one.",
    category: "Power Query",
    tags: ["Extract", "Text After Delimiter", "Power Query", "Transform", "delimiter"]
  },
  {
    id: 56,
    question: "You are importing sales data from a Microsoft Excel file named Sales.xlsx into Power BI Desktop. You need to create a bar chart showing the total sales amount by region.<br><br>When you create the bar chart, the regions appear as expected, but the sales amount value displays the count of sales amount instead of the sum of sales amount for each region.<br><br>You need to modify the query to ensure that the data appears correctly.<br><br>What should you do?",
    options: [
      "Delete the query, import the data into Microsoft SQL Server, and then import the data from SQL Server.",
      "In Query Editor, add a calculated column that totals the sales amount column.",
      "Change the Data Type of sales amount column to Numeric.",
      "Refresh the data model."
    ],
    correctAnswer: 2,
    explanation: "<strong>Change the Data Type of sales amount column to Numeric.</strong><br><br>When Power BI shows <em>Count</em> instead of <em>Sum</em> as the default aggregation, it usually means the column is being treated as text rather than a numeric type. Changing the data type to a numeric type (e.g., Decimal Number or Whole Number) will allow Power BI to default to Sum aggregation.<br><br><strong>Deleting and re-importing</strong> is unnecessarily complex. <strong>Adding a calculated column</strong> in Query Editor doesn't fix the root cause. <strong>Refreshing</strong> won't change the data type.",
    category: "Power Query",
    tags: ["Data Type", "numeric", "aggregation", "sum vs count", "Power Query", "bar chart"]
  },
  {
    id: 57,
    question: "You have a Microsoft SQL Server Analysis Services (SSAS) cube that contains historical data. In Power BI Desktop, you have the following query for the cube.<br><br><img src='images/q057-exhibit.png' alt='Question 57 Exhibit - Power Query steps for SSAS cube' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>The query retrieves 25,499 records. When you check the data warehouse that is the source of the cube, you discover that there are 26,423 records.<br><br>You need to ensure that the query retrieves all 26,423 records.<br><br>What should you do?",
    options: [
      "From Query Editor, refresh all the data.",
      "Change the query to use Live connection mode.",
      "Delete the Remove Duplicates step.",
      "Add an Unpivot Columns step."
    ],
    correctAnswer: 2,
    explanation: "<strong>Delete the Remove Duplicates step.</strong><br><br>The query's Applied Steps include a <strong>Remove Duplicates</strong> step on the FACT Internet Sales 'CarrierTrackingNumber' column. This step is eliminating rows that have duplicate tracking numbers, reducing the record count from 26,423 to 25,499. Since those are not true duplicates (different sales can share the same carrier tracking number), removing this step will restore all 26,423 records.<br><br><strong>Refreshing</strong> won't change the transformation logic. <strong>Live connection</strong> mode doesn't support Power Query transformations. <strong>Unpivot</strong> would restructure the data, not recover missing rows.",
    category: "Power Query",
    tags: ["Remove Duplicates", "SSAS", "record count", "Power Query", "Applied Steps", "cube"]
  },
  {
    id: 58,
    question: "You plan to use Power BI Desktop to import 100 CSV files. The files contain data from different stores. The files have the same structure and are stored in a network share.<br><br>You need to import the CSV files into one table. The solution must minimize administrative effort.<br><br>What should you do?",
    options: [
      "Add a folder data source and use the Combine Files command.",
      "Add a folder data source and use the Merge Queries command.",
      "Add a Microsoft Excel data source and use the Merge Queries command.",
      "Add text/CSV data sources and use the Append Queries command."
    ],
    correctAnswer: 0,
    explanation: "<strong>Add a folder data source and use the Combine Files command.</strong><br><br>• <strong>Combine Files</strong> — Only appears with the <strong>Folder</strong> data source. It automatically combines multiple files with the same structure into one table in a single operation.<br>• <strong>Append</strong> — Used when data already resides in Power Query Editor as separate queries.<br>• <strong>Merge</strong> — A join operation on tables (like a VLOOKUP), not for stacking rows.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/desktop-combine-binaries' target='_blank'>Combine files in Power BI Desktop</a>",
    category: "Power Query",
    tags: ["folder", "Combine Files", "CSV", "import", "Power Query", "network share"]
  },
  {
    id: 59,
    question: "You have the following two queries in Power BI Desktop:<br>• A query named Query1 that retrieves a table named SMB_Customers from a Microsoft SQL Server database<br>• A query named Query2 that retrieves a table named Enterprise_Customers from an Oracle Server database<br><br>Both tables have the same columns. You need to combine the data from SMB_Customers and Enterprise_Customers.<br><br>Which command should you use?",
    options: [
      "Combine Files",
      "Merge Queries",
      "Merge Columns",
      "Append Queries"
    ],
    correctAnswer: 3,
    explanation: "<strong>Append Queries</strong><br><br><strong>Append</strong> is used for tables with the same structure — it combines them vertically (stacks rows).<br><br><strong>Merge</strong> is like a VLOOKUP/JOIN — it combines tables horizontally via a common column (similar to the RELATED function in DAX).<br><br><strong>Combine Files</strong> is only available with the Folder connector. <strong>Merge Columns</strong> concatenates column values within the same table.<br><br>Reference: <a href='http://radacad.com/append-vs-merge-in-power-bi-and-power-query' target='_blank'>Append vs Merge in Power BI</a>",
    category: "Power Query",
    tags: ["Append Queries", "Merge Queries", "combine", "same structure", "Power Query"]
  },
  {
    id: 60,
    question: "You have a Power BI model that contains sensor data from 500 sensors that return temperature readings each minute. Your reporting requirements contain the need to calculate the average temperature from each sensor at every hour. The reports do NOT show the raw data for each minute.<br><br>You need to reduce the size of the model to improve performance.<br><br>What should you do?",
    options: [
      "Create visuals that group the data by hour.",
      "Use Power Query to group the sensor data by hour.",
      "Add a report filter for the Hour column.",
      "Remove the rows that contain readings."
    ],
    correctAnswer: 1,
    explanation: "<strong>Use Power Query to group the sensor data by hour.</strong><br><br>Since reports don't need minute-level data, grouping (aggregating) the sensor data by hour in <strong>Power Query</strong> reduces the number of rows imported into the model — from one row per minute to one row per hour per sensor. This significantly reduces model size and improves performance.<br><br>Grouping in visuals or adding report filters doesn't reduce the underlying model size. Removing all readings would leave no data.",
    category: "Power Query",
    tags: ["Group By", "performance", "aggregation", "sensor data", "Power Query", "model size"]
  },
  {
    id: 61,
    question: "You are using Power Query Editor in Power BI Desktop to import an Excel file that contains only one worksheet. The data in the file starts with column names on row 5 of the worksheet. There are occasional blank values in column A of the worksheet.<br><br>You need to remove the blank rows at the top of the worksheet and use the 5th row as the column headers of the table.<br><br>What should you do first?",
    options: [
      "Remove empty values from the first column.",
      "Remove the top 4 rows.",
      "Use the current headers as the first row.",
      "Use the first row as headers."
    ],
    correctAnswer: 1,
    explanation: "<strong>Remove the top 4 rows.</strong><br><br>The data starts at row 5, meaning the first 4 rows are blank or irrelevant. The <strong>first</strong> step is to remove those top 4 rows so that the actual column headers (row 5) become the first row. After that, you can promote that row to headers using \"Use first row as headers\".<br><br>You can't remove empty values first because column A has occasional blanks throughout the data — that would remove valid data rows too.",
    category: "Power Query",
    tags: ["Remove Rows", "Use First Row as Headers", "Excel import", "Power Query", "column headers"]
  },
  {
    id: 62,
    question: "You preview a query from the Power Query Editor. You notice that Column A contains blank values and null values.<br><br>You need to convert all blank values to null.<br><br>Which option should you select from Column A?",
    options: [
      "Clean",
      "Fill Down",
      "Replace Errors",
      "Replace Values"
    ],
    correctAnswer: 3,
    explanation: "<strong>Replace Values</strong><br><br><strong>Replace Values</strong> allows you to find a specific value (in this case, blank/empty strings) and replace it with another value (null). This is the correct tool for converting blanks to nulls.<br><br><strong>Clean</strong> removes non-printable characters. <strong>Fill Down</strong> copies the last non-null value downward. <strong>Replace Errors</strong> only targets error values, not blanks.",
    category: "Power Query",
    tags: ["Replace Values", "blank", "null", "Power Query", "data cleaning"]
  },
  {
    id: 63,
    question: "You are merging Orders and Order Details queries in Power Query Editor. Due to data quality issues, some rows in the Orders query do NOT have a matching row in the Order Details query.<br><br>You need to select the appropriate join type to ensure that all the rows from the Orders query are shown.<br><br>Which join type should you use?",
    options: [
      "Full Outer",
      "Inner",
      "Left Outer",
      "Right Anti"
    ],
    correctAnswer: 2,
    explanation: "<strong>Left Outer</strong><br><br>A <strong>Left Outer</strong> join keeps all rows from the first (left) table — in this case, the Orders query — and matches them with rows from the second table (Order Details). If there's no match, the Order Details columns will be null, but <em>all</em> Orders rows are preserved.<br><br><strong>Inner</strong> would drop Orders without matching Order Details. <strong>Full Outer</strong> keeps all rows from both tables. <strong>Right Anti</strong> only returns rows from the right table with no match.",
    category: "Power Query",
    tags: ["merge", "join type", "Left Outer", "Power Query", "Orders"]
  },
  {
    id: 64,
    question: "The two types of tables in a star schema are what?",
    options: [
      "Active and inactive tables",
      "Qualitative and quantitative data tables",
      "Fact and dimension tables"
    ],
    correctAnswer: 2,
    explanation: "<strong>Fact and dimension tables</strong><br><br>A <strong>star schema</strong> consists of <strong>fact tables</strong> (containing measurable events like sales transactions) at the center and <strong>dimension tables</strong> (containing descriptive attributes like products, dates, customers) surrounding them. This is the recommended data modeling pattern in Power BI.",
    category: "Data Modeling",
    tags: ["star schema", "fact table", "dimension table", "data modeling"]
  },
  {
    id: 65,
    question: "What is the difference between a fact table and a dimension table?",
    options: [
      "Fact tables store observations or events while dimension tables contain information about specific entities within the data",
      "Fact tables contain information about specific entities while dimension tables contain information about observational data",
      "Dimension tables tell you about specific roles in Power BI while fact tables tell you information about facts that are associated with those roles in Power BI",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "<strong>Fact tables store observations or events while dimension tables contain information about specific entities within the data</strong><br><br><strong>Fact tables</strong> contain measurable, quantitative data — observations or events like sales, orders, or transactions. <strong>Dimension tables</strong> contain descriptive, qualitative data about specific entities — such as product details, customer information, or date attributes. They provide the context for analyzing the facts.",
    category: "Data Modeling",
    tags: ["fact table", "dimension table", "observations", "entities", "data modeling"]
  },
  {
    id: 66,
    question: "What is it called when multiple records in one table are associated with multiple records in another table?",
    options: [
      "Many-to-many relationship",
      "One-to-many relationship",
      "Many-to-one relationship"
    ],
    correctAnswer: 0,
    explanation: "<strong>Many-to-many relationship</strong><br><br>A <strong>many-to-many</strong> relationship exists when multiple records in one table can relate to multiple records in another table. For example, students and courses — a student can enroll in many courses, and a course can have many students.<br><br><strong>One-to-many</strong> means one record in the first table relates to many in the second. <strong>Many-to-one</strong> is the reverse perspective of one-to-many.",
    category: "Data Modeling",
    tags: ["many-to-many", "relationship", "cardinality", "data modeling"]
  },
  {
    id: 67,
    question: "A dimension that can filter related facts differently is called what?",
    options: [
      "Role-playing dimension",
      "Snowflake dimension",
      "Degenerate dimension"
    ],
    correctAnswer: 0,
    explanation: "<strong>Role-playing dimension</strong><br><br>A <strong>role-playing dimension</strong> is a single dimension table that can be referenced multiple times in a data model, each time playing a different role. The most common example is a Date dimension that can filter facts by Order Date, Ship Date, or Due Date — each relationship gives the same dimension a different \"role\".<br><br>A <strong>snowflake dimension</strong> is a normalized dimension with sub-dimensions. A <strong>degenerate dimension</strong> is a dimension key stored directly in the fact table with no separate dimension table.",
    category: "Data Modeling",
    tags: ["role-playing dimension", "dimension", "filter", "star schema", "data modeling"]
  },
  {
    id: 68,
    question: "What type of table stores details about business entities?",
    options: [
      "Fact table",
      "Dimension table",
      "Date table",
      "Data table"
    ],
    correctAnswer: 1,
    explanation: "<strong>Dimension table</strong><br><br><strong>Dimension tables</strong> store descriptive details about business entities such as products, customers, employees, or locations. They provide the context and attributes used to analyze and filter the measurable data stored in fact tables.<br><br>A <strong>Date table</strong> is a specific type of dimension table. <strong>Fact tables</strong> store events/transactions, not entity details.",
    category: "Data Modeling",
    tags: ["dimension table", "business entities", "data modeling", "star schema"]
  },
  {
    id: 69,
    question: "You are creating a quick measure as shown in the following exhibit.<br><br><img src='images/q069-exhibit-1.jpg' alt='Question 69 Exhibit 1 - Quick Measure dialog' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to create a monthly rolling average measure for Sales over time. How should you configure the quick measure calculation?<br><br><img src='images/q069-exhibit-2.png' alt='Question 69 Exhibit 2 - Quick Measure configuration fields' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Box 1: Total Sales — Box 2: Date — Box 3: Month",
      "Box 1: Date — Box 2: Total Sales — Box 3: Year",
      "Box 1: Total Sales — Box 2: Month — Box 3: Date",
      "Box 1: Date — Box 2: Month — Box 3: Total Sales"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: Total Sales — Box 2: Date — Box 3: Month</strong><br><br><img src='images/q069-exhibit-3.png' alt='Question 69 Answer - Completed Quick Measure' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>To configure a rolling average quick measure:<br>• <strong>Box 1 (Base value)</strong>: Select <strong>Total Sales</strong> — the field you want to average.<br>• <strong>Box 2 (Date)</strong>: Select the <strong>Date</strong> field — the axis for the rolling calculation.<br>• <strong>Box 3 (Periods)</strong>: Select <strong>Month</strong> — the period granularity for the rolling average.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/transform-model/desktop-quick-measures' target='_blank'>Quick measures in Power BI Desktop</a>",
    category: "Data Modeling",
    tags: ["quick measure", "rolling average", "Total Sales", "Date", "Month", "DAX"]
  },
  {
    id: 70,
    question: "You build a report to analyze customer transactions from a database that contains the tables shown in the following table.<br><br><img src='images/q070-exhibit.png' alt='Question 70 Exhibit - Customer and Transaction tables' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You import the tables. Which relationship should you use to link the tables?",
    options: [
      "Many-to-many between Customer and Transaction",
      "One-to-many from Transaction to Customer",
      "One-to-many from Customer to Transaction",
      "One-to-one between Customer and Transaction"
    ],
    correctAnswer: 2,
    explanation: "<strong>One-to-many from Customer to Transaction</strong><br><br>Each customer can have <strong>many transactions</strong>, but for each transaction there is exactly <strong>one customer</strong>. This makes it a one-to-many relationship from the Customer table (the \"one\" side) to the Transaction table (the \"many\" side).",
    category: "Data Modeling",
    tags: ["one-to-many", "relationship", "Customer", "Transaction", "data modeling"]
  },
  {
    id: 71,
    question: "You have two tables named Customers and Invoice in a Power BI model. The Customers table contains: CustomerID, Customer City, Customer State, Customer Name, Customer Address 1, Customer Address 2, Customer Postal Code. The Invoice table contains: Order ID, Invoice ID, Invoice Date, Customer ID, Total Amount, Total Item Count.<br><br>The Customers table is related to the Invoice table through the Customer ID columns. A customer can have many invoices within one month.<br><br>The Power BI model must provide:<br>• The number of customers invoiced in each state last month<br>• The average invoice amount per customer in each postal code<br><br>You need to define the relationship from the Customers table to the Invoice table. The solution must optimize query performance.<br><br>What should you configure?<br><br><img src='images/q071-exhibit.jpg' alt='Question 71 Exhibit - Relationship configuration' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Box 1: One-to-many — Box 2: Single",
      "Box 1: One-to-many — Box 2: Both",
      "Box 1: Many-to-many — Box 2: Single",
      "Box 1: Many-to-many — Box 2: Both"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: One-to-many — Box 2: Single</strong><br><br><strong>Box 1: One-to-many</strong> — A customer can have many invoices within one month, so the relationship from Customers to Invoice is one-to-many.<br><br><strong>Box 2: Single</strong> — For one-to-many relationships, the cross filter direction is always from the \"one\" side (Customers) to the \"many\" side (Invoice). <strong>Single</strong> direction is sufficient here and optimizes query performance. Bi-directional filtering adds overhead and is only needed when the many side needs to filter the one side.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand' target='_blank'>Understand model relationships in Power BI Desktop</a>",
    category: "Data Modeling",
    tags: ["one-to-many", "cross filter", "Single", "relationship", "data modeling", "performance"]
  },
  {
    id: 72,
    question: "You are creating a Microsoft Power BI data model that has the tables shown in the following table.<br><br><img src='images/q072-exhibit-1.png' alt='Question 72 Exhibit 1 - Products and ProductCategory tables' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>The Products table is related to the ProductCategory table through the ProductCategoryID column. You need to ensure that you can analyze sales by product category.<br><br>How should you configure the relationships from Products to ProductCategory?<br><br><img src='images/q072-exhibit-2.png' alt='Question 72 Exhibit 2 - Relationship configuration' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Box 1: One-to-many — Box 2: Single",
      "Box 1: One-to-many — Box 2: Both",
      "Box 1: Many-to-many — Box 2: Single",
      "Box 1: Many-to-one — Box 2: Single"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: One-to-many — Box 2: Single</strong><br><br><strong>Box 1: One-to-many</strong> — Each product category can contain many products, so the relationship from ProductCategory to Products is one-to-many.<br><br><strong>Box 2: Single</strong> — For one-to-many relationships, the cross filter direction is always from the \"one\" side, and optionally from the \"many\" side (bi-directional). Single direction is the default and recommended setting.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand' target='_blank'>Understand model relationships in Power BI Desktop</a>",
    category: "Data Modeling",
    tags: ["one-to-many", "cross filter", "Single", "relationship", "ProductCategory", "data modeling"]
  },
  {
    id: 73,
    question: "What turns a collection of independent tables into a data model?",
    options: [
      "Connecting the tables via relationships, based on their common fields",
      "Connecting to the tables in a single Power BI file",
      "Merging the tables into a single \"master\" table",
      "Giving the tables related names"
    ],
    correctAnswer: 0,
    explanation: "<strong>Connecting the tables via relationships, based on their common fields</strong><br><br>In a data model, tables are connected via <strong>relationships</strong> based on their common fields (keys). This is what transforms a collection of independent tables into a cohesive data model that enables cross-table analysis and filtering.",
    category: "Data Modeling",
    tags: ["relationships", "common fields", "data model", "tables", "keys"]
  },
  {
    id: 74,
    question: "Which of these is NOT a data model best practice?",
    options: [
      "Use a star schema with many-to-many relationships",
      "Contain relationships with one-way filters (vs. bidirectional)",
      "Contain tables that each serve a specific purpose, including data (fact) tables and lookup (dim) tables",
      "Only include the data you need for analysis (no redundant or unnecessary records or fields)"
    ],
    correctAnswer: 0,
    explanation: "<strong>Use a star schema with many-to-many relationships</strong><br><br>A well-designed model should use a star schema with <strong>one-to-many (1:*)</strong> relationships, <strong>NOT</strong> many-to-many. Many-to-many relationships introduce ambiguity, reduce performance, and can lead to unexpected results. The other options are all valid best practices.",
    category: "Data Modeling",
    tags: ["best practice", "star schema", "many-to-many", "one-to-many", "data modeling"]
  },
  {
    id: 75,
    question: "Which of the following fields would you typically find in a data (fact) table?",
    options: [
      "Product name",
      "Retail price",
      "Quantity Sold",
      "Product Brand"
    ],
    correctAnswer: 2,
    explanation: "<strong>Quantity Sold</strong><br><br>Data (fact) tables contain <strong>measurable metrics</strong> about the business, like quantity sold, while lookup (dimension) tables provide descriptive attributes about each dimension in your model, like product name, product brand, and retail price.",
    category: "Data Modeling",
    tags: ["fact table", "data table", "metrics", "Quantity Sold", "dimension table"]
  },
  {
    id: 76,
    question: "What is the name of a column or field used to uniquely identify each row of a table?",
    options: [
      "Primary key",
      "Foreign key",
      "Native key",
      "Unique key"
    ],
    correctAnswer: 0,
    explanation: "<strong>Primary key</strong><br><br>Primary keys uniquely identify each row of a table, and match the foreign keys in related data tables. A primary key contains only unique, non-null values.",
    category: "Data Modeling",
    tags: ["primary key", "foreign key", "unique identifier", "data modeling", "relationships"]
  },
  {
    id: 77,
    question: "Which of the following statements is NOT true regarding the use of merged tables instead of data models?",
    options: [
      "Merging creates redundant data",
      "Merging uses more memory",
      "Merging uses more processing power",
      "Merging keeps metrics and dimensions in separate tables"
    ],
    correctAnswer: 3,
    explanation: "<strong>Merging keeps metrics and dimensions in separate tables</strong><br><br>This is NOT true — merging does the <em>opposite</em>. Merging data by pulling all the attributes into the fact table itself <strong>combines</strong> metrics and dimensions into one table, which creates redundant data and utilizes significantly more memory and processing power than creating relationships between multiple small tables.",
    category: "Data Modeling",
    tags: ["merge", "redundant data", "memory", "data model", "best practice"]
  },
  {
    id: 78,
    question: "In a one-to-many relationship cardinality, what is the \"many\" attached to?",
    options: [
      "Primary key",
      "Foreign key",
      "Index column",
      "Lookup table"
    ],
    correctAnswer: 1,
    explanation: "<strong>Foreign key</strong><br><br>Cardinality refers to the uniqueness of values in a column. Whenever there is only one instance of each value, it is a <strong>primary key</strong> (the \"one\" side). If there are many instances of the same value, it is a <strong>foreign key</strong> (the \"many\" side).",
    category: "Data Modeling",
    tags: ["foreign key", "primary key", "cardinality", "one-to-many", "data modeling"]
  },
  {
    id: 79,
    question: "Which of the following statements is true regarding filter flow?",
    options: [
      "By default, the filter direction will point from the \"one\" side of the relationship to the \"many\" side",
      "When you filter a table, the filter context is passed along to all related \"downstream\" tables",
      "Filters cannot flow \"upstream\"",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "<strong>All of the above</strong><br><br>The filter directions (arrows) in each relationship point from the \"one\" side (lookups) to the \"many\" side (data) by default. When you filter a table, that filter context is passed along to all related \"downstream\" tables (following the direction of the arrow). Filters cannot flow \"upstream\" (against the direction of the arrow) unless bi-directional cross filtering is enabled.",
    category: "Data Modeling",
    tags: ["filter flow", "filter direction", "upstream", "downstream", "cross filter", "data modeling"]
  },
  {
    id: 80,
    question: "Which of these functions can be used to activate inactive relationships?",
    options: [
      "RELATED",
      "RELATEDTABLE",
      "USERELATIONSHIP",
      "ACTIVATE"
    ],
    correctAnswer: 2,
    explanation: "<strong>USERELATIONSHIP</strong><br><br>The <strong>USERELATIONSHIP</strong> function allows you to determine which relationship to use between two tables, including inactive relationships. This is commonly used with role-playing dimensions (e.g., a Date table linked to both Order Date and Ship Date).<br><br><strong>RELATED</strong> returns a value from a related table. <strong>RELATEDTABLE</strong> returns a table of related rows. <strong>ACTIVATE</strong> is not a DAX function.",
    category: "DAX",
    tags: ["USERELATIONSHIP", "inactive relationship", "DAX", "role-playing dimension", "data modeling"]
  },
  {
    id: 81,
    question: "If you import or create your own date table, which of these requirements must it meet?",
    options: [
      "Must contain all the days for all years represented in the model",
      "Cannot contain duplicate dates",
      "Must have at least one field set as a Date or DateTime datatype",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "<strong>All of the above</strong><br><br>To import or create your own date table, it must meet all 3 of these requirements:<br>• Must contain all the days for all years represented in the model<br>• Cannot contain duplicate dates<br>• Must have at least one field set as a Date or DateTime datatype<br><br>Additionally, all times must be identical (e.g., 12:00 AM).",
    category: "Data Modeling",
    tags: ["date table", "requirements", "DateTime", "data modeling", "calendar"]
  },
  {
    id: 82,
    question: "You have a Microsoft Excel 2016 workbook that has a Power Pivot model. The model contains the following tables:<br>• Product (Product_id, Product_Name)<br>• Sales (Order_id, Order_Date, Product_id, Salesperson_id, Sales_Amount)<br>• Salesperson (Salesperson_id, Salesperson_name, address)<br><br>The model has the following relationships: Sales to Product, Sales to Salesperson.<br><br>You create a new Power BI file and import the Power Pivot model. You need to ensure that you can generate a report that displays the count of products sold by each salesperson.<br><br>What should you do?",
    options: [
      "Create a one-to-one relationship between Product and Salesperson.",
      "For each relationship, change the Cross filter direction to Both.",
      "For each relationship, change the Cardinality to One to one (1:1).",
      "Change a many-to-one relationship between Product and Salesperson."
    ],
    correctAnswer: 1,
    explanation: "<strong>For each relationship, change the Cross filter direction to Both.</strong><br><br>There's no need to create another relationship — the model already has relationships that extend to the needed level (Sales to Product and Sales to Salesperson). You only need to allow the Sales table to filter Product from the Salesperson context, and you can do that by changing the cross filter direction to <strong>Both</strong> (bi-directional).<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/desktop-create-and-manage-relationships' target='_blank'>Create and manage relationships in Power BI Desktop</a>",
    category: "Data Modeling",
    tags: ["cross filter", "Both", "bi-directional", "Power Pivot", "relationship", "data modeling"]
  },
  {
    id: 83,
    question: "You have two tables named CustomerVisits and Date in a Power BI model. You create a measure to calculate the number of customer visits. You use the measure in the report shown in the exhibit.<br><br><img src='images/q083-exhibit.png' alt='Question 83 Exhibit - Customer visits report' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You discover that the total number of customer visits was 60,000, and that there were only 5,000 customer visits in August.<br><br>You need to fix the report to display the correct data for each month.<br><br>What should you do?",
    options: [
      "Modify the measure to use the CALCULATE DAX function.",
      "Create a relationship between the CustomerVisits table and the Date table.",
      "Modify the measure to use the SUM DAX function.",
      "Create a hierarchy in the Date table."
    ],
    correctAnswer: 1,
    explanation: "<strong>Create a relationship between the CustomerVisits table and the Date table.</strong><br><br>The report shows the same total (60,000) for every month, which means the Date table is not filtering the CustomerVisits table. This is a classic symptom of a missing relationship. Creating a relationship between the two tables will allow the Date filter to flow into CustomerVisits and display the correct data per month.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/desktop-create-and-manage-relationships' target='_blank'>Create and manage relationships</a><br><a href='https://docs.microsoft.com/en-us/power-bi/desktop-tutorial-create-measures' target='_blank'>Create measures</a>",
    category: "Data Modeling",
    tags: ["relationship", "missing relationship", "Date table", "filter", "measure", "data modeling"]
  },
  {
    id: 84,
    question: "You have a query that retrieves sales data. A sample of the data is shown in the following table.<br><br><img src='images/q084-exhibit.png' alt='Question 84 Exhibit - Sales data with null dates' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to ensure that the values in the Date column contain a date. Null values must be replaced with the date from the previous row.<br><br>What should you click on the Transform tab in Query Editor?",
    options: [
      "Format, and then Clean",
      "Date, and then Earliest",
      "Fill, and then Down",
      "Replace Values, and then Replace Errors"
    ],
    correctAnswer: 2,
    explanation: "<strong>Fill, and then Down</strong><br><br>Under <strong>Fill</strong> in the Transform ribbon, <strong>Down</strong> replaces null values with the preceding non-null value, and <strong>Up</strong> replaces null values with the next non-null value below them.<br><br>Reference: <a href='https://www.excelcampus.com/library/fill-down-blank-null-cells-power-query/' target='_blank'>Fill Down Blank/Null Cells in Power Query</a>",
    category: "Power Query",
    tags: ["Fill Down", "null", "Transform", "Power Query", "date"]
  },
  {
    id: 85,
    question: "You have a table named Sales. A sample of the data in Sales is shown in the following table.<br><br><img src='images/q085-exhibit.png' alt='Question 85 Exhibit - Sales table with dates' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You create a stacked column chart visualization that displays ProductName by Date. You discover that the axis for the visualization displays all the individual dates.<br><br>You need to ensure that the visualization displays ProductName by year and that you can drill down to see ProductName by week and day.<br><br>What should you do first?",
    options: [
      "Create a new table that has columns for the date, year, week, and day.",
      "Create a new hierarchy in the Sales table.",
      "Format the visualization and set the type of the X-Axis to Categorical.",
      "Configure a visual filter for the Date column that uses an advanced filter."
    ],
    correctAnswer: 0,
    explanation: "<strong>Create a new table that has columns for the date, year, week, and day.</strong><br><br>The first step is to create a proper Date table with columns for date, year, week, and day. Then:<br>1. Create a relationship between the Date table and the Sales table via the Date column.<br>2. Build a hierarchy (Year &gt; Week &gt; Day) in the Date table.<br><br>This enables drill-down from year to week to day in the visualization.",
    category: "Data Modeling",
    tags: ["date table", "hierarchy", "drill down", "year", "week", "day", "visualization"]
  },
  {
    id: 86,
    question: "You have a Power BI data model that contains a Sale Date table. You need to add a second date table named Ship Date that contains the same columns as those in Sale Date. The solution must NOT repeat the query logic.<br><br>What should you do to create the query for Ship Date?",
    options: [
      "Reference the Sale Date query.",
      "Duplicate the Sale Date query.",
      "Rename the Sale Date query to Ship Date.",
      "Append the Sale Date query as a new query."
    ],
    correctAnswer: 0,
    explanation: "<strong>Reference the Sale Date query.</strong><br><br>A <strong>Reference</strong> creates a new query that points to the output of the existing Sale Date query without duplicating the query logic. If the Sale Date query changes, the Ship Date query automatically reflects those changes.<br><br><strong>Duplicate</strong> would copy the query logic, creating redundancy. <strong>Rename</strong> would remove the original. <strong>Append</strong> would stack rows, not create a separate table.",
    category: "Power Query",
    tags: ["Reference", "Duplicate", "query", "date table", "Ship Date", "Power Query"]
  },
  {
    id: 87,
    question: "You need to create a relationship between two tables named Sales and Sales Detail in a Power BI data model. For every row in the Sales table, there is at least one row, and possibly multiple rows, in the Sales Detail table.<br><br>How should you configure the relationship?",
    options: [
      "One-to-one from Sales to Sales Detail",
      "One-to-many from Sales to Sales Detail",
      "Many-to-many from Sales to Sales Detail",
      "Many-to-one from Sales to Sales Detail"
    ],
    correctAnswer: 1,
    explanation: "<strong>One-to-many from Sales to Sales Detail</strong><br><br>Each row in the Sales table can have one or more corresponding rows in the Sales Detail table, making this a classic <strong>one-to-many</strong> relationship. Sales is the \"one\" side (each sale is unique) and Sales Detail is the \"many\" side (multiple line items per sale).",
    category: "Data Modeling",
    tags: ["one-to-many", "relationship", "Sales", "Sales Detail", "data modeling"]
  },
  {
    id: 88,
    question: "You preview a single table in the Power Query Editor in Power BI Desktop. The table contains the following columns: LocationName, LocationID, Temperature, and DateTime.<br><br>You need to convert the table into a properly formed star schema.<br><br>To which table should you add the LocationName field?",
    options: [
      "Date Dimension",
      "Location Dimension",
      "Location Fact",
      "Temperature Measurements Fact"
    ],
    correctAnswer: 1,
    explanation: "<strong>Location Dimension</strong><br><br><strong>LocationName</strong> is a descriptive attribute of a location entity, so it belongs in a <strong>dimension table</strong> — specifically the Location Dimension. In a properly formed star schema, dimension tables hold descriptive attributes (like names), while fact tables hold measurable events (like temperature readings).",
    category: "Data Modeling",
    tags: ["star schema", "dimension table", "Location", "Power Query", "data modeling"]
  },
  {
    id: 89,
    question: "You have a Microsoft Power BI semantic model that contains two tables named DimDate and FactSales. DimDate is the main date table in the model. FactSales is a fact table that contains data about sales orders.<br><br>FactSales has the following three relationships to DimDate:<br>• An active relationship between FactSales[OrderDate] and DimDate[Date]<br>• An inactive relationship between FactSales[ShipDate] and DimDate[Date]<br>• An inactive relationship between FactSales[ReturnDate] and DimDate[Date]<br><br>Which type of dimension is DimDate?",
    options: [
      "Degenerate dimension",
      "Junk dimension",
      "Outrigger dimension",
      "Role-playing dimension"
    ],
    correctAnswer: 3,
    explanation: "<strong>Role-playing dimension</strong><br><br>A <strong>role-playing dimension</strong> is a single dimension table that is referenced multiple times in a data model, each time playing a different role. Here, DimDate plays three roles: Order Date, Ship Date, and Return Date. The USERELATIONSHIP function can be used in DAX to activate the inactive relationships when needed.",
    category: "DAX",
    tags: ["role-playing dimension", "DimDate", "inactive relationship", "USERELATIONSHIP", "data modeling"]
  },
  {
    id: 90,
    question: "You have a Microsoft Power BI semantic model that contains a dimension table named DimCustomer and a fact table named FactOrder. DimCustomer contains one row per customer. FactOrder contains one row per order.<br><br>You need to create a relationship between DimCustomer and FactOrder.<br><br>Which type of relationship cardinality should you choose?",
    options: [
      "Many-to-many",
      "Many-to-one",
      "One-to-many",
      "One-to-one"
    ],
    correctAnswer: 2,
    explanation: "<strong>One-to-many</strong><br><br>DimCustomer has one row per customer (unique), while FactOrder has one row per order — and a single customer can place many orders. This makes it a <strong>one-to-many</strong> relationship from DimCustomer (the \"one\" side) to FactOrder (the \"many\" side).",
    category: "Data Modeling",
    tags: ["one-to-many", "DimCustomer", "FactOrder", "cardinality", "data modeling"]
  },
  {
    id: 91,
    question: "You have a Microsoft Power BI semantic model that contains three tables named FactSales, DimProduct, and DimDate. There is a relationship between FactSales and DimProduct and FactSales and DimDate. The model is used to create reports that show monthly sales by product.<br><br>FactSales contains 50 million rows of daily sales data. DimProduct contains 1,000 rows. DimDate contains sales dates for the last three years.<br><br>You need to minimize the size of the semantic model. The solution must support the reporting requirements.<br><br>What should you do?",
    options: [
      "Summarize the DimDate table to the month level.",
      "Summarize the FactSales table to the month level.",
      "Summarize the FactSales table to the product category level.",
      "Summarize the FactSales table to the quarter level."
    ],
    correctAnswer: 1,
    explanation: "<strong>Summarize the FactSales table to the month level.</strong><br><br>FactSales has 50 million rows of daily data, but reports only need monthly sales by product. Summarizing (grouping) FactSales to the month level dramatically reduces the row count while still supporting the reporting requirements. Summarizing DimDate wouldn't reduce the model size significantly since it's small. Summarizing to quarter would lose monthly granularity needed for reports.",
    category: "Data Modeling",
    tags: ["model size", "summarize", "FactSales", "monthly", "performance", "data modeling"]
  },
  {
    id: 92,
    question: "Which are calculated on demand?",
    options: [
      "Calculated columns",
      "Calculated tables",
      "Measures"
    ],
    correctAnswer: 2,
    explanation: "<strong>Measures</strong><br><br><strong>Measures</strong> are calculated on demand at query time based on the current filter context. <strong>Calculated columns</strong> and <strong>calculated tables</strong> are computed during data refresh and stored in the model, consuming memory.",
    category: "DAX",
    tags: ["measures", "calculated columns", "on demand", "DAX", "filter context"]
  },
  {
    id: 93,
    question: "Which are calculated based on the filters that are used by the report user? Calculated columns or measures?",
    options: [
      "Measures",
      "Calculated columns"
    ],
    correctAnswer: 0,
    explanation: "<strong>Measures</strong><br><br>Measures are evaluated dynamically based on the <strong>filter context</strong> — they respond to slicers, filters, and row/column context applied by the report user. Calculated columns are computed once during data refresh and don't change based on user interactions.",
    category: "DAX",
    tags: ["measures", "filter context", "calculated columns", "DAX", "dynamic"]
  },
  {
    id: 94,
    question: "Which DAX function evaluates an expression in a modified filter context?",
    options: [
      "SUMX",
      "CALCULATE",
      "ALL"
    ],
    correctAnswer: 1,
    explanation: "<strong>CALCULATE</strong><br><br>The <strong>CALCULATE</strong> function evaluates an expression in a modified filter context. It allows you to add, remove, or change filters applied to your data. <strong>SUMX</strong> is an iterator that sums an expression row by row. <strong>ALL</strong> removes filters but is typically used as a filter argument inside CALCULATE.",
    category: "DAX",
    tags: ["CALCULATE", "DAX", "filter context", "modified filter", "expression"]
  },
  {
    id: 95,
    question: "Why would you want to override the default context?",
    options: [
      "To create measures that behave according to the user's selection",
      "To create measures that behave according to your intentions, regardless of what the user selects"
    ],
    correctAnswer: 1,
    explanation: "<strong>To create measures that behave according to your intentions, regardless of what the user selects</strong><br><br>Overriding the default filter context (using functions like CALCULATE with ALL, REMOVEFILTERS, etc.) allows you to create measures that produce consistent results regardless of user selections — for example, calculating a percentage of grand total or comparing against a fixed baseline.",
    category: "DAX",
    tags: ["filter context", "override", "CALCULATE", "ALL", "DAX", "measures"]
  },
  {
    id: 96,
    question: "What type of measure uses SUM to aggregate over one set of dimensions and a different aggregation over a different set of dimensions?",
    options: [
      "Additive",
      "Aggregate",
      "Semi-additive"
    ],
    correctAnswer: 2,
    explanation: "<strong>Semi-additive</strong><br><br><strong>Semi-additive</strong> measures can be summed across some dimensions but not others. For example, a bank account balance can be summed across accounts (customers) but not across time — for time, you'd use LASTNONBLANK or LASTDATE instead of SUM. <strong>Additive</strong> measures can be summed across all dimensions.",
    category: "DAX",
    tags: ["semi-additive", "additive", "aggregation", "DAX", "measures", "dimensions"]
  },
  {
    id: 97,
    question: "What type of functions enable you to manipulate data using time periods?",
    options: [
      "Time intelligence",
      "Comparer functions",
      "Value functions"
    ],
    correctAnswer: 0,
    explanation: "<strong>Time intelligence</strong><br><br><strong>Time intelligence</strong> functions in DAX enable you to manipulate data using time periods — such as calculating year-to-date totals, same period last year comparisons, rolling averages, and more. Examples include TOTALYTD, SAMEPERIODLASTYEAR, DATEADD, and PREVIOUSMONTH.",
    category: "DAX",
    tags: ["time intelligence", "DAX", "time periods", "TOTALYTD", "SAMEPERIODLASTYEAR"]
  },
  {
    id: 98,
    question: "Which two functions will help you compare dates to the previous month?",
    options: [
      "TOTALYTD and PREVIOUSMONTH",
      "CALCULATE and TOTALYTD",
      "CALCULATE and PREVIOUSMONTH"
    ],
    correctAnswer: 2,
    explanation: "<strong>CALCULATE and PREVIOUSMONTH</strong><br><br>To compare values to the previous month, you use <strong>CALCULATE</strong> to modify the filter context combined with <strong>PREVIOUSMONTH</strong> to shift the date filter back one month. For example: <code>CALCULATE([Total Sales], PREVIOUSMONTH('Date'[Date]))</code><br><br>TOTALYTD calculates year-to-date totals, which is a different use case.",
    category: "DAX",
    tags: ["CALCULATE", "PREVIOUSMONTH", "time intelligence", "DAX", "compare", "monthly"]
  },
  {
    id: 99,
    question: "You have an API that returns more than 100 columns. The following is a sample of column names:<br>• client_notified_timestamp<br>• client_notified_source<br>• client_notified_sourceid<br>• client_notified_value<br>• client_responded_timestamp<br>• client_responded_source<br>• client_responded_sourceid<br>• client_responded_value<br><br>You plan to include only a subset of the returned columns. You need to remove any columns that have a suffix of \"sourceid\".<br><br>How should you complete the Power Query M code?<br><br><img src='images/q099-exhibit.png' alt='Question 99 Exhibit - Power Query M code' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Box 1: Table.RemoveColumns — Box 2: List.Select — Box 3: Text.EndsWith",
      "Box 1: Table.SelectColumns — Box 2: List.Select — Box 3: Text.Contains",
      "Box 1: Table.RemoveColumns — Box 2: List.FindText — Box 3: Text.StartsWith",
      "Box 1: Table.SelectColumns — Box 2: List.FindText — Box 3: Text.EndsWith"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: Table.RemoveColumns — Box 2: List.Select — Box 3: Text.EndsWith</strong><br><br>• <strong>Table.RemoveColumns</strong> — When you do Remove Columns, Power Query uses this function to remove specified columns from the table.<br>• <strong>List.Select</strong> — Used to get a filtered list of column names that match a condition.<br>• <strong>Text.EndsWith</strong> — Checks if a text value ends with a specified suffix (\"sourceid\").<br><br>Reference: <a href='https://community.powerbi.com/t5/Power-Query/Remove-columns-containing-a-certain-value/td-p/759657' target='_blank'>Remove columns containing a certain value</a>",
    category: "Power Query",
    tags: ["Table.RemoveColumns", "List.Select", "Text.EndsWith", "M code", "Power Query", "API"]
  },
  {
    id: 100,
    question: "You import two Microsoft Excel tables named Customer and Address into Power Query. Customer contains: Customer ID, Customer Name, Phone, Email Address, Address ID. Address contains: Address ID, Address Line 1, Address Line 2, City, State/Region, Country, Postal Code.<br><br>The Customer ID and Address ID columns represent unique rows. You need to create a query that has one row per customer. Each row must contain City, State/Region, and Country for each customer.<br><br>What should you do?",
    options: [
      "Merge the Customer and Address tables.",
      "Transpose the Customer and Address tables.",
      "Group the Customer and Address tables by the Address ID column.",
      "Append the Customer and Address tables."
    ],
    correctAnswer: 0,
    explanation: "<strong>Merge the Customer and Address tables.</strong><br><br>There are two primary ways of combining queries:<br>• <strong>Merge</strong> — When you have one or more columns that you'd like to add to another query (like a JOIN/VLOOKUP). Use this when you want to combine columns from different tables based on a common key (Address ID).<br>• <strong>Append</strong> — When you have additional rows of data to add to an existing query (stacking tables vertically).<br><br>Since you need to add City, State/Region, and Country from the Address table to each Customer row, merging on Address ID is the correct approach.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-shape-and-combine-data' target='_blank'>Shape and combine data in Power BI Desktop</a>",
    category: "Power Query",
    tags: ["Merge", "Append", "Customer", "Address", "Power Query", "join"]
  },
  {
    id: 101,
    question: "You have a data model that contains many complex DAX expressions. The expressions contain frequent references to the RELATED and RELATEDTABLE functions.<br><br>You need to recommend a solution to minimize the use of the RELATED and RELATEDTABLE functions.<br><br>What should you recommend?",
    options: [
      "Split the model into multiple models.",
      "Hide unused columns in the model.",
      "Merge tables by using Power Query.",
      "Transpose."
    ],
    correctAnswer: 2,
    explanation: "<strong>Merge tables by using Power Query.</strong><br><br>When you merge tables in Power Query, you combine columns from related tables into a single table — eliminating the need for RELATED and RELATEDTABLE in DAX. Instead of looking up values across relationships at query time, the data is already combined during the ETL process.<br><br>Note: RELATEDTABLE is a shortcut for CALCULATETABLE with no logical expression.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-shape-and-combine-data' target='_blank'>Shape and combine data in Power BI Desktop</a>",
    category: "Power Query",
    tags: ["RELATED", "RELATEDTABLE", "Merge", "Power Query", "DAX", "simplify"]
  },
  {
    id: 102,
    question: "You have a Power BI report. You need to create a calculated table to return the 100 highest spending customers.<br><br>How should you complete the DAX expression?<br><br><img src='images/q102-exhibit.png' alt='Question 102 Exhibit - DAX expression' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Box 1: TOPN — Box 2: SUMMARIZE — Box 3: DESC",
      "Box 1: TOPN — Box 2: GROUPBY — Box 3: ASC",
      "Box 1: FILTER — Box 2: SUMMARIZE — Box 3: DESC",
      "Box 1: RANKX — Box 2: GROUPBY — Box 3: ASC"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: TOPN — Box 2: SUMMARIZE — Box 3: DESC</strong><br><br>• <strong>TOPN</strong> — Returns the top N rows of the specified table. Syntax: <code>TOPN(n_value, table, orderBy_expression, [order])</code><br>• <strong>SUMMARIZE</strong> — Returns a summary table for the requested totals over a set of groups (grouping customers with their total spending).<br>• <strong>DESC</strong> — Sort in descending order to get the highest spenders first.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/dax/topn-function-dax' target='_blank'>TOPN function (DAX)</a><br><a href='https://docs.microsoft.com/en-us/dax/summarize-function-dax' target='_blank'>SUMMARIZE function (DAX)</a>",
    category: "DAX",
    tags: ["TOPN", "SUMMARIZE", "DESC", "DAX", "calculated table", "top customers"]
  },
  {
    id: 103,
    question: "Your company has affiliates who help the company acquire customers. You build a report for the affiliate managers to assist them in understanding affiliate performance.<br><br>The managers request a visual showing the total sales value of the latest 50 transactions for each affiliate. You have a data model that contains the following tables:<br><br><img src='images/q103-exhibit-1.png' alt='Question 103 Exhibit 1 - Data model tables' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>The Affiliate table has a one-to-many relationship to the Transactions table based on the AffiliateID column. You need to develop a measure to support the visual.<br><br>How should you complete the DAX expression?<br><br><img src='images/q103-exhibit-2.png' alt='Question 103 Exhibit 2 - DAX expression to complete' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Box 1: CALCULATE — Box 2: SUM — Box 3: TOPN — Box 4: [TransactionID]",
      "Box 1: CALCULATE — Box 2: SUMX — Box 3: FILTER — Box 4: [AffiliateID]",
      "Box 1: SUMX — Box 2: SUM — Box 3: TOPN — Box 4: [TransactionDate]",
      "Box 1: CALCULATE — Box 2: COUNT — Box 3: TOPN — Box 4: [Amount]"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: CALCULATE — Box 2: SUM — Box 3: TOPN — Box 4: [TransactionID]</strong><br><br>• <strong>CALCULATE</strong> — Evaluates an expression in a modified filter context.<br>• <strong>SUM</strong> — Sums the sales amount for the filtered transactions.<br>• <strong>TOPN</strong> — Returns the top N rows of a table. Syntax: <code>TOPN(n_value, table, orderBy_expression, [order])</code><br>• <strong>[TransactionID]</strong> — The orderBy_expression used to identify the latest 50 transactions (highest TransactionID = most recent).<br><br>Reference: <a href='https://docs.microsoft.com/en-us/dax/topn-function-dax' target='_blank'>TOPN function (DAX)</a>",
    category: "DAX",
    tags: ["CALCULATE", "SUM", "TOPN", "TransactionID", "DAX", "affiliate", "measure"]
  },
  {
    id: 104,
    question: "You start building out a dynamic calendar table in the query editor. Which of the following statements would you use to create a Start of Week column that begins on Monday?",
    options: [
      "Table.AddColumn(#\"Inserted Day Name\", \"Start of Week\", each Date.StartOfWeek([Date],Day.Sunday), type date)",
      "Table.AddColumn(#\"Inserted Day Name\", \"Start of Week\", each Date.StartOfWeek([Date],Day.Monday), type date)",
      "Table.AddColumn(#\"Inserted Day Name\", \"Start of Week\", each Date.EndOfWeek([Date],Day.Sunday), type date)",
      "Table.AddColumn(#\"Inserted Day Name\", \"Start of Week\", each Date.EndOfWeek([Date],Day.Tuesday), type date)"
    ],
    correctAnswer: 1,
    explanation: "<strong>Table.AddColumn(...Date.StartOfWeek([Date],Day.Monday)...)</strong><br><br>The <code>Date.StartOfWeek</code> function returns the start of the week for a given date. The second parameter specifies which day the week starts on. Since we want the week to begin on Monday, we pass <code>Day.Monday</code>. The other options either use the wrong day or use <code>Date.EndOfWeek</code> instead of <code>Date.StartOfWeek</code>.",
    category: "Power Query",
    tags: ["calendar table", "Date.StartOfWeek", "Monday", "M code", "Power Query"]
  },
  {
    id: 105,
    question: "What does DAX stand for, in the context of Power BI?",
    options: [
      "Data Analysis Expressions",
      "Data & Analysis Exchange",
      "Data Aggregation Expressions",
      "Dogs Against Xylophones"
    ],
    correctAnswer: 0,
    explanation: "<strong>Data Analysis Expressions</strong><br><br>DAX stands for <strong>Data Analysis Expressions</strong> — it is the formula language that drives Power BI. DAX is used to create calculated columns, calculated tables, and measures.",
    category: "DAX",
    tags: ["DAX", "Data Analysis Expressions", "formula language", "Power BI"]
  },
  {
    id: 106,
    question: "Where should you create calculated columns to reduce model size and improve performance?",
    options: [
      "Source data",
      "Power Query",
      "Data model",
      "They all achieve the same results"
    ],
    correctAnswer: 0,
    explanation: "<strong>Source data</strong><br><br>Creating calculated columns as close to the source as possible helps reduce data model size and improve performance. When calculations are done at the source (e.g., in SQL), they don't add processing overhead to Power BI's in-memory engine.",
    category: "Data Modeling",
    tags: ["calculated columns", "source data", "performance", "model size", "best practice"]
  },
  {
    id: 107,
    question: "Which of the following is NOT true about measures?",
    options: [
      "They are evaluated based on row context",
      "They reference entire tables or columns",
      "They aren't visible within tables",
      "They recalculate in response to any change to filters within the report"
    ],
    correctAnswer: 0,
    explanation: "<strong>They are evaluated based on row context</strong><br><br>This is NOT true — measures are evaluated based on <strong>filter context</strong>, not row context. Measures respond to slicers, filters, and visual context. <strong>Calculated columns</strong> are the ones evaluated in row context (row by row during data refresh). The other statements are all true about measures.",
    category: "DAX",
    tags: ["measures", "row context", "filter context", "DAX", "calculated columns"]
  },
  {
    id: 108,
    question: "In what field do measures typically \"live\" in a visual?",
    options: [
      "Rows",
      "Columns",
      "Values",
      "Filters"
    ],
    correctAnswer: 2,
    explanation: "<strong>Values</strong><br><br>Measures are numerical, calculated values that can be analyzed in the <strong>Values</strong> field of a report visual. Rows and Columns fields typically contain dimension attributes (categories), while Filters control what data is displayed.",
    category: "DAX",
    tags: ["measures", "Values", "visual", "fields", "Power BI"]
  },
  {
    id: 109,
    question: "Which of these DAX function categories loops through the same calculation on each row of a table, then aggregates the results?",
    options: [
      "Logical Functions",
      "Filter Functions",
      "Stats Functions",
      "Iterator Functions"
    ],
    correctAnswer: 3,
    explanation: "<strong>Iterator Functions</strong><br><br>Iterator (or \"X\") functions allow you to loop through the same calculation on each row of a table, and then apply some sort of aggregation to the results (SUM, MAX, etc.). Examples include <code>SUMX</code>, <code>AVERAGEX</code>, <code>MAXX</code>, <code>MINX</code>, and <code>COUNTX</code>.",
    category: "DAX",
    tags: ["Iterator Functions", "SUMX", "AVERAGEX", "DAX", "X functions", "aggregation"]
  },
  {
    id: 110,
    question: "Which of the following functions modifies and overrules any competing filter context?",
    options: [
      "CALCULATE",
      "SUMX",
      "RELATED",
      "REPLACE"
    ],
    correctAnswer: 0,
    explanation: "<strong>CALCULATE</strong><br><br><strong>CALCULATE</strong> modifies and overrules any competing filter context! It evaluates an expression in a modified filter context, allowing you to add, remove, or replace filters. <strong>SUMX</strong> is an iterator. <strong>RELATED</strong> returns values from a related table. <strong>REPLACE</strong> is a text function.",
    category: "DAX",
    tags: ["CALCULATE", "filter context", "overrule", "DAX", "modify filters"]
  },
  {
    id: 111,
    question: "Which of the following functions returns a table?",
    options: [
      "TOPN",
      "FILTER",
      "DATEADD",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "<strong>All of the above</strong><br><br>All of these functions return tables:<br>• <strong>TOPN</strong> — Returns a table with the top N rows.<br>• <strong>FILTER</strong> — Returns a filtered table.<br>• <strong>DATEADD</strong> — Returns a table of dates shifted by a specified interval.<br><br>These are commonly used as table expressions inside functions like CALCULATE, SUMX, or COUNTROWS.",
    category: "DAX",
    tags: ["TOPN", "FILTER", "DATEADD", "table functions", "DAX"]
  },
  {
    id: 112,
    question: "Which of the following is NOT true about CALCULATE modifiers?",
    options: [
      "They are used to change filter context",
      "They are used to access inactive table relationships",
      "They allow you to drag and drop fields rather than write DAX from scratch",
      "They are used to change the way filters propagate"
    ],
    correctAnswer: 2,
    explanation: "<strong>They allow you to drag and drop fields rather than write DAX from scratch</strong><br><br>This describes <strong>Quick Measures</strong>, not CALCULATE modifiers. CALCULATE modifiers are DAX functions used within CALCULATE to:<br>• Change filter context (e.g., ALL, REMOVEFILTERS)<br>• Access inactive table relationships (USERELATIONSHIP)<br>• Change the way filters propagate (CROSSFILTER)",
    category: "DAX",
    tags: ["CALCULATE", "modifiers", "Quick Measures", "filter context", "DAX"]
  },
  {
    id: 113,
    question: "Which of the following functions allows you to calculate running totals?",
    options: [
      "DATESYTD",
      "DATEADD",
      "DATESINPERIOD",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "<strong>DATESINPERIOD</strong><br><br><strong>DATESINPERIOD</strong> allows you to calculate running totals by returning a table of dates within a specified period (e.g., the last 12 months from the current date context).<br><br>• <strong>DATESYTD</strong> — Calculates performance year-to-date.<br>• <strong>DATEADD</strong> — Shifts dates to calculate for a previous period (e.g., same period last year).",
    category: "DAX",
    tags: ["DATESINPERIOD", "running totals", "DATESYTD", "DATEADD", "time intelligence", "DAX"]
  },
  {
    id: 114,
    question: "You have a table named Sales. Sales contains the data shown in the following table.<br><br><img src='images/q114-exhibit-1.png' alt='Question 114 Exhibit 1 - Sales data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have the following measure:<br><code>Total Sales This Year = SUM([Total Sales])</code><br><br>You plan to create a KPI to compare the current yearly sales to the previous year as shown in the exhibit.<br><br><img src='images/q114-exhibit-2.png' alt='Question 114 Exhibit 2 - KPI visualization' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to create the measure for the goal. How should you complete the DAX formula?<br><br><img src='images/q114-exhibit-3.png' alt='Question 114 Exhibit 3 - DAX formula to complete' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "CALCULATE and DATEADD",
      "CALCULATE and DATESYTD",
      "SUMX and DATEADD",
      "SUMX and PREVIOUSYEAR"
    ],
    correctAnswer: 0,
    explanation: "<strong>CALCULATE and DATEADD</strong><br><br>To compare current yearly sales to the previous year, you use:<br>• <strong>CALCULATE</strong> — To evaluate the Total Sales expression in a modified filter context.<br>• <strong>DATEADD</strong> — To shift the date filter back by one year, returning the previous year's dates.<br><br>Example: <code>Total Sales Last Year = CALCULATE([Total Sales This Year], DATEADD('Date'[Date], -1, YEAR))</code><br><br>Reference: <a href='https://msdn.microsoft.com/query-bi/dax/dateadd-function-dax' target='_blank'>DATEADD function (DAX)</a>",
    category: "DAX",
    tags: ["CALCULATE", "DATEADD", "KPI", "previous year", "time intelligence", "DAX"]
  },
  {
    id: 115,
    question: "You have a Power BI model that contains the following two tables:<br>• Sales (Sales_ID, sales_date, sales_amount, CustomerID)<br>• Customer (CustomerID, First_name, Last_name)<br><br>There is a relationship between Sales and Customer. You need to create a measure to rank the customers based on their total sales amount.<br><br>Which DAX formula should you use?",
    options: [
      "RANKX(ALL(Sales), SUMX(RELATEDTABLE(Customer), [Sales_amount]))",
      "TOPN(ALL(customer), SUMX(RELATEDTABLE(Sales), [Sales_amount]))",
      "RANKX(ALL(customer), SUMX(RELATEDTABLE(Sales), [Sales_amount]))",
      "RANK.EQ(Sales[sales_amount], Customer[CustomerID])"
    ],
    correctAnswer: 2,
    explanation: "<strong>RANKX(ALL(customer), SUMX(RELATEDTABLE(Sales), [Sales_amount]))</strong><br><br>You need to rank <strong>customers</strong> based on their total sales amount, not rank sales. Therefore:<br>• <strong>RANKX</strong> — Ranks items in a table.<br>• <strong>ALL(customer)</strong> — Iterates over all customers (ignoring filters).<br>• <strong>SUMX(RELATEDTABLE(Sales), [Sales_amount])</strong> — For each customer, sums the sales amounts from the related Sales table.<br><br>References:<br><a href='https://msdn.microsoft.com/query-bi/dax/rankx-function-dax' target='_blank'>RANKX function (DAX)</a>",
    category: "DAX",
    tags: ["RANKX", "ALL", "SUMX", "RELATEDTABLE", "DAX", "ranking", "customers"]
  },
  {
    id: 116,
    question: "You have a Power BI model that contains the following two tables:<br>• Sales (Sales_ID, DateID, sales_amount)<br>• Date (DateID, Date, Month, Week, Year)<br><br>The tables have a relationship. You need to create a measure to calculate the sales for the same period from the previous year.<br><br>Which DAX formula should you use?",
    options: [
      "SUM(sales[sales_amount]) - CALCULATE(SUM(sales[sales_amount]), DATESYTD('Date'[Date]))",
      "CALCULATE(SUM(sales[sales_amount]), SAMEPERIODLASTYEAR('Date'[Date]))",
      "SUM(sales[sales_amount]) - CALCULATE(SUM(sales[sales_amount]), SAMEPERIODLASTYEAR('Date'[Date]))",
      "CALCULATEX(SUM(sales[sales_amount]), DATESYTD('Date'[Date]))"
    ],
    correctAnswer: 1,
    explanation: "<strong>CALCULATE(SUM(sales[sales_amount]), SAMEPERIODLASTYEAR('Date'[Date]))</strong><br><br><strong>SAMEPERIODLASTYEAR</strong> returns a table of dates shifted back one year from the current filter context. Combined with <strong>CALCULATE</strong>, it evaluates SUM(sales[sales_amount]) for the same period in the previous year.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/dax/sameperiodlastyear-function-dax' target='_blank'>SAMEPERIODLASTYEAR function (DAX)</a>",
    category: "DAX",
    tags: ["CALCULATE", "SAMEPERIODLASTYEAR", "time intelligence", "DAX", "previous year"]
  },
  {
    id: 117,
    question: "You have a Power BI model that has a date table. A sample of the data is shown in the following table.<br><br><img src='images/q117-exhibit.png' alt='Question 117 Exhibit - Date table sample' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to add a column to display the date in the format of <strong>December 01, 2014</strong>.<br><br>Which DAX formula should you use in Power BI Desktop?",
    options: [
      "FORMAT([Date], \"MMM\") & \" \" & FORMAT([Date], \"DD\") & \", \" & FORMAT([Date], \"YYYY\")",
      "FORMAT([Date], \"M\") & \" \" & FORMAT([Date], \"D\") & \", \" & [Date].[Year])",
      "[Date].[Month] & \" \" & FORMAT([Date], \"D\") & \", \" & [Date].[Year])",
      "FORMAT([Date], \"MMMM DD, YYYY\")"
    ],
    correctAnswer: 3,
    explanation: "<strong>FORMAT([Date], \"MMMM DD, YYYY\")</strong><br><br>The FORMAT function with <strong>\"MMMM\"</strong> produces the full month name (e.g., December). <strong>\"DD\"</strong> gives the two-digit day and <strong>\"YYYY\"</strong> gives the four-digit year. Using <code>\"MMM\"</code> would produce the short name (e.g., Dec, Jan).<br><br>This is the simplest and most direct way to format the date as \"December 01, 2014\".",
    category: "DAX",
    tags: ["FORMAT", "date format", "MMMM", "DAX", "calculated column"]
  },
  {
    id: 118,
    question: "You are creating a work schedule for a retail store. You have the following data from a query named Schedule.<br><br><img src='images/q118-exhibit-1.png' alt='Question 118 Exhibit 1 - Schedule data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to visualize the data as shown in the following exhibit.<br><br><img src='images/q118-exhibit-2.jpeg' alt='Question 118 Exhibit 2 - Schedule visualization' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You add a matrix visualization, then add Employee to the rows and Scheduled to columns. Which DAX formula should you use to create the measure that will display the checkboxes?<br><br><img src='images/q118-exhibit-3.png' alt='Question 118 Exhibit 3 - DAX formula options' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Schedule Display = IF(COUNTROWS(Schedule) > 0, UNICHAR(9635), \" \")",
      "Schedule Display = IF(COUNTA(Schedule[Employee]) > 0, UNICHAR(9635), \" \")",
      "Schedule Display = IF(COUNT(Schedule[Scheduled]) > 0, UNICHAR(9635), \" \")",
      "Schedule Display = IF(COUNTX(Schedule, Schedule[Employee]) > 0, UNICHAR(9635), \" \")"
    ],
    correctAnswer: 0,
    explanation: "<strong>Schedule Display = IF(COUNTROWS(Schedule) > 0, UNICHAR(9635), \" \")</strong><br><br><strong>COUNTROWS(Schedule)</strong> counts the number of rows in the Schedule table within the current filter context. If there are rows (meaning the employee is scheduled), it displays a checkbox character using <strong>UNICHAR(9635)</strong>; otherwise, it shows a blank space.<br><br>Key functions:<br>• <code>COUNTROWS(table)</code> — Counts rows in a table<br>• <code>UNICHAR(9635)</code> — Returns a checkbox/ballot box character",
    category: "DAX",
    tags: ["COUNTROWS", "IF", "UNICHAR", "matrix", "DAX", "schedule", "visualization"]
  },
  {
    id: 119,
    question: "You have a property named FactInternetSales used by several Power BI reports. The query is shown in the exhibit.<br><br><img src='images/q119-exhibit-1.jpeg' alt='Question 119 Exhibit 1 - FactInternetSales query' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You plan to create a bar chart showing the count of sales by year that have a SalesAmount greater than $1,000. You need to create a measure that will be used in the bar chart.<br><br>How should you complete the DAX formula?<br><br><img src='images/q119-exhibit-2.png' alt='Question 119 Exhibit 2 - DAX formula to complete' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "COUNTROWS and FILTER",
      "COUNTROWS and CALCULATETABLE",
      "COUNT and FILTER",
      "COUNTA and SUMMARIZE"
    ],
    correctAnswer: 0,
    explanation: "<strong>COUNTROWS and FILTER</strong><br><br>To count sales where SalesAmount > $1,000:<br><code>COUNTROWS(FILTER('FactInternetSales', 'FactInternetSales'[SalesAmount] > 1000))</code><br><br>• <strong>COUNTROWS</strong> — Counts the number of rows in the filtered table.<br>• <strong>FILTER</strong> — Returns a table filtered to only rows where SalesAmount > 1000.",
    category: "DAX",
    tags: ["COUNTROWS", "FILTER", "bar chart", "SalesAmount", "DAX", "measure"]
  },
  {
    id: 120,
    question: "You have a Power BI model for sales data. You create a measure to calculate the year-to-date sales. You need to compare the year-to-date sales with the previous year for the same time period.<br><br>Which DAX function should you use?",
    options: [
      "LASTDATE",
      "TOTALYTD",
      "SAMEPERIODLASTYEAR",
      "PREVIOUSYEAR",
      "DATEADD",
      "DATESYTD"
    ],
    correctAnswer: 2,
    explanation: "<strong>SAMEPERIODLASTYEAR</strong><br><br>You already have a YTD measure:<br><code>YtdSales = CALCULATE(SUM(FactInternetSales[SalesAmount]), DATESYTD(FactInternetSales[DueDate]))</code><br><br>To compare with the previous year for the same period, create a second measure:<br><code>YtdSalesSamePeriodLastYear = CALCULATE([YtdSales], SAMEPERIODLASTYEAR(FactInternetSales[DueDate]))</code><br><br><strong>SAMEPERIODLASTYEAR</strong> shifts the current date context back by exactly one year, giving you the equivalent period from last year.",
    category: "DAX",
    tags: ["SAMEPERIODLASTYEAR", "DATESYTD", "YTD", "time intelligence", "DAX", "compare"]
  },
  {
    id: 121,
    question: "You have a Power BI model that contains tables named Sales and Date. Sales contains four columns named SalesAmount, OrderDate, SalesPerson, and OrderID.<br><br>You need to create a measure to calculate the last 12 months of sales. You must start from the last date a sale was made and ignore any filters set on the report.<br><br>How should you complete the DAX formula?<br><br><img src='images/q121-exhibit.png' alt='Question 121 Exhibit - DAX formula to complete' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "DATEADD and LASTNONBLANK",
      "DATEADD and LASTDATE",
      "DATESINPERIOD and LASTNONBLANK",
      "DATESYTD and LASTDATE"
    ],
    correctAnswer: 0,
    explanation: "<strong>DATEADD and LASTNONBLANK</strong><br><br>1. <strong>DATEADD</strong> — Gets the date 12 months ago from the reference point.<br>2. <strong>LASTNONBLANK</strong> — Gets the last valid date where a sale was actually made (ignoring blanks).<br>3. These are nested together inside <strong>CALCULATE</strong> to compute the last 12 months of sales.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/dax/dateadd-function-dax' target='_blank'>DATEADD (DAX)</a><br><a href='https://docs.microsoft.com/en-us/dax/lastnonblank-function-dax' target='_blank'>LASTNONBLANK (DAX)</a>",
    category: "DAX",
    tags: ["DATEADD", "LASTNONBLANK", "CALCULATE", "12 months", "time intelligence", "DAX"]
  },
  {
    id: 122,
    question: "You have a Power BI model that contains a table named Person. Person contains a whole number column named Age.<br><br>You need to write a DAX measure that finds the middle value in the range of Age values.<br><br>Which two formulas should you use? Each answer presents a complete solution.",
    options: [
      "MEDIAN('Person'[Age])",
      "PERCENTILE.INC('Person'[Age], 0.5)",
      "AVERAGE('Person'[Age])",
      "RANK.EQ('Person'[Age], 'Person'[Age])"
    ],
    correctAnswer: [0, 1],
    multiSelect: true,
    explanation: "<strong>MEDIAN('Person'[Age])</strong> and <strong>PERCENTILE.INC('Person'[Age], 0.5)</strong><br><br>Both formulas return the middle value (median):<br>• <strong>MEDIAN</strong> — Directly returns the median (middle value) of a column.<br>• <strong>PERCENTILE.INC with 0.5</strong> — Returns the 50th percentile, which is the median.<br><br><strong>AVERAGE</strong> returns the arithmetic mean, not the middle value. <strong>RANK.EQ</strong> returns a ranking position, not a value.",
    category: "DAX",
    tags: ["MEDIAN", "PERCENTILE.INC", "middle value", "DAX", "statistics"]
  },
  {
    id: 123,
    question: "You have a Power BI model that contains the following two tables:<br>• Assets (AssetID, AssetName, Purchase_DateID, Value)<br>• Date (DateID, Date, Month, Week, Year)<br><br>The tables have a relationship. Date is marked as a date table in the Power BI model. You need to create a measure to calculate the percentage that the total assets value increased since one year ago.<br><br>Which DAX formula should you use?",
    options: [
      "(SUM(Assets[Value]) - CALCULATE(SUM(Assets[Value]), SAMEPERIODLASTYEAR('Date'[Date]))) / CALCULATE(SUM(Assets[Value]), SAMEPERIODLASTYEAR('Date'[Date]))",
      "CALCULATE(SUM(Assets[Value]), SAMEPERIODLASTYEAR('Date'[Date])) / SUM(Assets[Value])",
      "CALCULATE(SUM(Assets[Value]), DATESYTD('Date'[Date])) / SUM(Assets[Value])",
      "SUM(Assets[Value]) / CALCULATE(SUM(Assets[Value]), SAMEPERIODLASTYEAR('Date'[Date]))"
    ],
    correctAnswer: 0,
    explanation: "<strong>(Current - Prior) / Prior</strong><br><br>The basic formula for percentage increase is: <code>% = (current - prior) / prior</code><br><br>• <strong>Current</strong>: <code>SUM(Assets[Value])</code><br>• <strong>Prior</strong>: <code>CALCULATE(SUM(Assets[Value]), SAMEPERIODLASTYEAR('Date'[Date]))</code><br><br>This gives: (Current - Prior) / Prior = the percentage increase since one year ago.",
    category: "DAX",
    tags: ["percentage increase", "SAMEPERIODLASTYEAR", "CALCULATE", "DAX", "Assets", "time intelligence"]
  },
  {
    id: 124,
    question: "You need to write a DAX measure that returns the revenue for selected dates during the previous year.<br><br>Which two DAX functions should you include in the measure? Each correct answer presents part of the solution.",
    options: [
      "CALCULATE",
      "CLOSINGBALANCEYEAR",
      "PREVIOUSQUARTER",
      "SAMEPERIODLASTYEAR"
    ],
    correctAnswer: [0, 3],
    multiSelect: true,
    explanation: "<strong>CALCULATE</strong> and <strong>SAMEPERIODLASTYEAR</strong><br><br>• <strong>CALCULATE</strong> — Evaluates an expression in a modified filter context.<br>• <strong>SAMEPERIODLASTYEAR</strong> — Returns a table of dates shifted back one year from the selected dates.<br><br>Together: <code>CALCULATE([Revenue], SAMEPERIODLASTYEAR('Date'[Date]))</code><br><br><strong>CLOSINGBALANCEYEAR</strong> evaluates at the end of the year. <strong>PREVIOUSQUARTER</strong> shifts by a quarter, not a year.",
    category: "DAX",
    tags: ["CALCULATE", "SAMEPERIODLASTYEAR", "revenue", "previous year", "DAX", "time intelligence"]
  },
  {
    id: 125,
    question: "You need to create a role-playing dimension using DAX. Which type of DAX expression should you use?",
    options: [
      "Calculated column",
      "Calculated table",
      "Measure",
      "What-If analysis"
    ],
    correctAnswer: 1,
    explanation: "<strong>Calculated table</strong><br><br>A <strong>calculated table</strong> using DAX creates a copy of a dimension table that can serve a different role. For example, you can create a Ship Date table from your Date table using: <code>ShipDate = 'Date'</code>. This creates a separate copy that can have its own relationship to the fact table, enabling role-playing dimensions.",
    category: "DAX",
    tags: ["calculated table", "role-playing dimension", "DAX", "date table", "data modeling"]
  },
  {
    id: 126,
    question: "You have a Microsoft Power BI semantic model that contains two tables named DimDate and FactInventory. DimDate is the date table. FactInventory is a snapshot table that contains one row per product per date with the count of items remaining in inventory.<br><br>You need to create a measure named Stock on Hand that returns the number of items available in inventory as of the last day of the selected period. The measure must work in the context of a specific day, week, month, or year.<br><br>Which formula should you use in the measure?",
    options: [
      "CALCULATE( SUM(FactInventory[UnitsBalance]), LASTDATE('Date'[Date]) )",
      "CALCULATE( SUM(FactInventory[UnitsBalance]), LASTNONBLANK('Date'[Date], CALCULATE(SUM(FactInventory[UnitsBalance]))) )",
      "CALCULATE( SUM(FactInventory[UnitsBalance]), FIRSTDATE('Date'[Date]) )",
      "CALCULATE( SUM(FactInventory[UnitsBalance]), MAX('Date'[Date]) )"
    ],
    correctAnswer: 0,
    explanation: "<strong>CALCULATE( SUM(FactInventory[UnitsBalance]), LASTDATE('Date'[Date]) )</strong><br><br><strong>LASTDATE</strong> returns the last date in the current filter context. Since the snapshot table has one row per product per date, evaluating SUM(UnitsBalance) at the last date gives you the stock on hand as of the end of the selected period. This works correctly whether the user selects a day, week, month, or year.",
    category: "DAX",
    tags: ["LASTDATE", "CALCULATE", "inventory", "snapshot", "semi-additive", "DAX"]
  },
  {
    id: 127,
    question: "You have a Microsoft Power BI semantic model that contains two tables named FactInventory and DimDate. FactInventory is a fact table that contains one row per product per weekday. Inventory balances are NOT recorded on weekends. DimDate is the date table in the model.<br><br>You need to create a measure that shows the last available inventory balance for a selected period.<br><br>Which DAX function should you include in the solution?",
    options: [
      "EOMONTH",
      "FIRSTNONBLANK",
      "LASTNONBLANK",
      "NETWORKDAYS"
    ],
    correctAnswer: 2,
    explanation: "<strong>LASTNONBLANK</strong><br><br><strong>LASTNONBLANK</strong> returns the last date for which a non-blank value exists. Since inventory balances are NOT recorded on weekends, <strong>LASTDATE</strong> might return a weekend date with no data. <strong>LASTNONBLANK</strong> ensures you get the last date that actually has an inventory balance recorded.<br><br><strong>EOMONTH</strong> returns end of month (could be a weekend). <strong>FIRSTNONBLANK</strong> returns the first date, not the last. <strong>NETWORKDAYS</strong> is not a DAX function.",
    category: "DAX",
    tags: ["LASTNONBLANK", "inventory", "weekday", "semi-additive", "DAX", "snapshot"]
  },
  {
    id: 128,
    question: "You have a Microsoft Power BI report that contains a bar chart showing sales by month. The chart is populated by adding a column named Sales[SalesAmt] to the visual and setting the summarization to Sum.<br><br>You need to replace the field in the visual with an explicit measure.<br><br>Which measure should you create?",
    options: [
      "Sales Amount = COUNT(Sales[SalesAmt])",
      "Sales Amount = Sales",
      "Sales Amount = Sales[SalesAmt]",
      "Sales Amount = SUM(Sales[SalesAmt])"
    ],
    correctAnswer: 3,
    explanation: "<strong>Sales Amount = SUM(Sales[SalesAmt])</strong><br><br>The original visual uses implicit summarization (Sum) on the Sales[SalesAmt] column. To create an equivalent explicit measure, you use <code>SUM(Sales[SalesAmt])</code>. <strong>COUNT</strong> would count rows, not sum values. A bare column reference is not a valid measure. <strong>Sales</strong> alone is not a valid DAX expression.",
    category: "DAX",
    tags: ["SUM", "explicit measure", "implicit measure", "bar chart", "DAX"]
  },
  {
    id: 129,
    question: "You have a Power BI model that contains a table named Person. The Person table contains a whole number column named Age.<br><br>You need to write a DAX measure that finds the middle value in the range of Age values.<br><br>What formula should you use?",
    options: [
      "AVERAGE('Person'[Age])",
      "MEDIAN('Person'[Age])",
      "RANK.EQ('Person'[Age], 'Person'[Age])",
      "STDEV.P('Person'[Age])"
    ],
    correctAnswer: 1,
    explanation: "<strong>MEDIAN('Person'[Age])</strong><br><br>The <strong>MEDIAN</strong> function returns the middle value in a set of numbers. <strong>AVERAGE</strong> returns the arithmetic mean (not the middle value). <strong>RANK.EQ</strong> returns a ranking position. <strong>STDEV.P</strong> returns the standard deviation.",
    category: "DAX",
    tags: ["MEDIAN", "middle value", "Age", "DAX", "statistics"]
  },
  {
    id: 130,
    question: "What benefit do you get from analyzing metadata?",
    options: [
      "The benefit of analyzing metadata is that you can clearly identify data inconsistencies with your dataset.",
      "The benefit of analyzing the metadata is to get familiar with your data.",
      "The benefit of analyzing the metadata is to know the number of rows, columns and tables being loaded into your model."
    ],
    correctAnswer: 0,
    explanation: "<strong>You can clearly identify data inconsistencies with your dataset.</strong><br><br>Analyzing metadata helps you identify data inconsistencies — such as mismatched data types, unexpected null values, duplicate column names, or structural differences between tables. While it also helps you get familiar with your data and understand its structure, the primary benefit is spotting inconsistencies.",
    category: "Data Modeling",
    tags: ["metadata", "data inconsistencies", "data quality", "analysis", "data modeling"]
  },
  {
    id: 131,
    question: "Which tool enables you to identify bottlenecks that exist in code?",
    options: [
      "Q&A",
      "Column profiling",
      "Performance analyzer"
    ],
    correctAnswer: 2,
    explanation: "<strong>Performance analyzer</strong><br><br>The <strong>Performance analyzer</strong> tool in Power BI Desktop allows you to record and analyze performance metrics for each visual, identifying bottlenecks such as slow DAX queries, long-running data source queries, or slow visual rendering.",
    category: "Power BI Service",
    tags: ["Performance analyzer", "bottleneck", "optimization", "Power BI Desktop"]
  },
  {
    id: 132,
    question: "What is cardinality?",
    options: [
      "Cardinality is the granularity of the data.",
      "Cardinality is how long it takes for the data to load.",
      "Cardinality is a type of visual element.",
      "Cardinality is a term used to describe the uniqueness of values in a column. Relationship cardinality refers to the number of rows from one table related to another (one-to-one, one-to-many, many-to-many)."
    ],
    correctAnswer: 3,
    explanation: "<strong>Cardinality describes the uniqueness of values in a column.</strong><br><br>In the context of data modeling, cardinality has two meanings:<br>• <strong>Column cardinality</strong> — The number of distinct values in a column (high cardinality = many unique values).<br>• <strong>Relationship cardinality</strong> — Describes how rows in one table relate to rows in another (1:1, 1:*, *:*).",
    category: "Data Modeling",
    tags: ["cardinality", "uniqueness", "relationship", "one-to-many", "data modeling"]
  },
  {
    id: 133,
    question: "Which Power BI option gives you the option to send fewer queries and disable certain interactions?",
    options: [
      "Direct query",
      "Query reduction",
      "Query diagnostics"
    ],
    correctAnswer: 1,
    explanation: "<strong>Query reduction</strong><br><br><strong>Query reduction</strong> options in Power BI Desktop (under Options > Query reduction) allow you to send fewer queries to the data source by adding an \"Apply\" button to slicers and filters, and by disabling cross-highlighting/cross-filtering between visuals. This is especially helpful for DirectQuery models to improve performance.",
    category: "Power BI Service",
    tags: ["Query reduction", "performance", "fewer queries", "DirectQuery", "optimization"]
  },
  {
    id: 134,
    question: "Other than Power BI, another place where performance optimization can be performed is where?",
    options: [
      "At the data source",
      "In the Power BI service",
      "In Microsoft SharePoint"
    ],
    correctAnswer: 0,
    explanation: "<strong>At the data source</strong><br><br>Performance optimization should happen as close to the data source as possible. This includes creating proper indexes, optimizing SQL queries, pre-aggregating data, and ensuring the source database is well-tuned. Optimizing at the source benefits all downstream consumers, not just Power BI.",
    category: "Data Modeling",
    tags: ["performance", "data source", "optimization", "indexes", "best practice"]
  },
  {
    id: 135,
    question: "Is it possible to create a relationship between two columns if they are different DATA TYPE columns?",
    options: [
      "Yes, if cardinality of the relationship is set to Many-to-Many.",
      "Yes, the above is fully supported in the latest version of Power BI Desktop.",
      "No, both columns in a relationship must be sharing the same DATA TYPE."
    ],
    correctAnswer: 2,
    explanation: "<strong>No, both columns in a relationship must share the same DATA TYPE.</strong><br><br>It is not possible to create a relationship between two columns if they have different data types. For example, you cannot create a relationship between a text column and a whole number column. Both columns must share the same data type (e.g., both Whole Number, or both Text).",
    category: "Data Modeling",
    tags: ["relationship", "data type", "requirement", "data modeling", "columns"]
  },
  {
    id: 136,
    question: "A critical aspect of data aggregation is that it allows you to focus on what?",
    options: [
      "The important and most meaningful data",
      "Disabling interactive analysis over big data",
      "Larger cache size and decreased query performance"
    ],
    correctAnswer: 0,
    explanation: "<strong>The important and most meaningful data</strong><br><br>Data aggregation allows you to summarize and focus on the most important and meaningful data by rolling up detailed records into higher-level summaries. This reduces noise, improves performance, and makes analysis more efficient.",
    category: "Data Modeling",
    tags: ["aggregation", "meaningful data", "summarize", "data modeling", "performance"]
  },
  {
    id: 137,
    question: "Before you start creating aggregations, you should first decide what?",
    options: [
      "The storage mode of your aggregation",
      "The granularity (level) on which to create them"
    ],
    correctAnswer: 1,
    explanation: "<strong>The granularity (level) on which to create them</strong><br><br>Before creating aggregations, you must first decide the <strong>granularity</strong> — the level of detail at which to aggregate. For example, should you aggregate daily, weekly, or monthly? By product or product category? This decision determines the trade-off between model size reduction and the level of detail available for analysis.",
    category: "Data Modeling",
    tags: ["aggregation", "granularity", "level of detail", "data modeling", "planning"]
  },
  {
    id: 138,
    question: "<img src='images/q138-exhibit.png' alt='Question 138 Exhibit - Ad analytics data model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>The Impressions table contains approximately 30 million records per month. You need to create an ad analytics system to meet the following requirements:<br>• Present ad impression counts for the day, campaign, and Site_name. The analytics for the last year are required.<br>• Minimize the data model size.<br><br>Which two actions should you perform?",
    options: [
      "Group the impressions by Ad_id, Site_name, and Impression_date. Aggregate by using the CountRows function.",
      "Create one-to-many relationships between the tables.",
      "Create a calculated measure that aggregates by using the COUNTROWS function.",
      "Create a calculated table that contains Ad_id, Site_name, and Impression_date."
    ],
    correctAnswer: [0, 1],
    multiSelect: true,
    explanation: "<strong>Group the impressions</strong> and <strong>Create one-to-many relationships</strong><br><br>The most effective technique to reduce model size is to load pre-summarized data. Grouping impressions by Ad_id, Site_name, and Impression_date with CountRows aggregation dramatically reduces the 30 million rows/month while still supporting the required analytics. Creating one-to-many relationships connects the aggregated fact table to the dimension tables.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction' target='_blank'>Data reduction techniques for Import modeling</a>",
    category: "Data Modeling",
    tags: ["aggregation", "Group By", "COUNTROWS", "one-to-many", "model size", "data reduction"]
  },
  {
    id: 139,
    question: "You have a Microsoft Power BI report. The size of the PBIX file is 550 MB. The report is accessed by using an App workspace in shared capacity of powerbi.com.<br><br>The report uses an imported dataset that contains one fact table with 12 million rows. The dataset is scheduled to refresh twice a day.<br><br>The report is a single page that contains 15 AppSource visuals and 10 default visuals. Users say that the report is slow to load the visuals when they access and interact with the report.<br><br>You need to recommend a solution to improve the performance of the report.<br><br>What should you recommend?",
    options: [
      "Change any DAX measures to use iterator functions.",
      "Replace the default visuals with AppSource visuals.",
      "Change the imported dataset to DirectQuery.",
      "Remove unused columns from tables in the data model."
    ],
    correctAnswer: 3,
    explanation: "<strong>Remove unused columns from tables in the data model.</strong><br><br>At 550 MB with 12 million rows, the model likely contains unnecessary columns inflating its size. Removing unused columns reduces memory usage and improves query performance.<br><br>Note: There are several versions of this question in the exam with different incorrect options. Other incorrect options may include: Implement RLS, Increase refresh frequency.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-use-directquery' target='_blank'>Use DirectQuery in Power BI Desktop</a>",
    category: "Power BI Service",
    tags: ["performance", "unused columns", "model size", "optimization", "PBIX", "data reduction"]
  },
  {
    id: 140,
    question: "You have a large dataset that contains more than 1 million rows. The table has a datetime column named Date.<br><br>You need to reduce the size of the data model without losing access to any data.<br><br>What should you do?",
    options: [
      "Round the hour of the Date column to startOfHour.",
      "Change the data type of the Date column to Text.",
      "Trim the Date column.",
      "Split the Date column into two columns, one that contains only the time and another that contains only the date."
    ],
    correctAnswer: 3,
    explanation: "<strong>Split the Date column into two columns.</strong><br><br>Separating a datetime column into a <strong>date</strong> column and a <strong>time</strong> column reduces model size because:<br>• The date column can join to a Date dimension table (which has far fewer unique values).<br>• The time column can join to a Time dimension table (max ~1,440 rows for minutes or ~86,400 for seconds).<br>• A single datetime column with 1M+ rows likely has very high cardinality (many unique values), which is expensive for the VertiPaq engine to compress.<br><br>References:<br><a href='https://apexinsights.net/blog/top-5-tips-to-optimise-data-model' target='_blank'>Top 5 Tips to Optimise Data Model</a>",
    category: "Data Modeling",
    tags: ["datetime", "split column", "date", "time", "model size", "optimization", "cardinality"]
  },
  {
    id: 141,
    question: "You are configuring a Microsoft Power BI data model to enable users to ask natural language questions by using Q&A.<br><br>You have a table named Customer that has the following measure:<br><code>Customer Count = DISTINCTCOUNT(Customer[CustomerID])</code><br><br>Users frequently refer to customers as <strong>subscribers</strong>.<br><br>You need to ensure that the users can get a useful result for \"subscriber count\" by using Q&A. The solution must minimize the size of the model.<br><br>What should you do?",
    options: [
      "Set Summarize By to None for the CustomerID column.",
      "Add a synonym of \"subscriber\" to the Customer table.",
      "Add a synonym of \"subscriberID\" to the CustomerID column.",
      "Add a description of \"subscriber count\" to the Customer Count measure."
    ],
    correctAnswer: 1,
    explanation: "<strong>Add a synonym of \"subscriber\" to the Customer table.</strong><br><br>You can add synonyms to tables and columns in the Power BI model. This step applies specifically to Q&A. Users often have a variety of terms they use to refer to the same thing. Adding \"subscriber\" as a synonym to the Customer table allows Q&A to understand that \"subscriber count\" refers to Customer Count.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/natural-language/q-and-a-best-practices' target='_blank'>Q&A best practices</a>",
    category: "Power BI Service",
    tags: ["Q&A", "synonym", "natural language", "Customer", "Power BI Service"]
  },
  {
    id: 142,
    question: "Which of the following is <strong>not</strong> a best practice when using the Q&A visual?",
    options: [
      "Fix incorrect data types",
      "Add axis labels to all the charts",
      "Add missing relationships between tables",
      "Add synonyms to tables and columns"
    ],
    correctAnswer: 1,
    explanation: "<strong>Add axis labels to all the charts</strong> is NOT a Q&A best practice.<br><br>Best practices for Q&A include:<br>• Use new Q&A tooling to interact with queries and make improvements<br>• Add missing relationships between tables<br>• Rename tables and columns<br>• Fix incorrect data types<br>• Normalize your model (single table or column per question)<br>• Add synonyms to tables and columns<br><br>Adding axis labels to charts is a general visualization best practice, not specific to Q&A.",
    category: "Power BI Service",
    tags: ["Q&A", "best practice", "natural language", "data modeling"]
  },
  {
    id: 143,
    question: "<img src='images/q143-exhibit-1.png' alt='Question 143 Exhibit - Sales data table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>From the Home tab in Power BI Desktop, you click Enter Data and create a table named Sales that contains the data shown above.<br><br>You add Region and Sales to a visualization and the visualization displays the following data:<br><br><img src='images/q143-exhibit-2.png' alt='Question 143 Exhibit - Visualization output' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>What causes the visualization to display four rows of data instead of six?",
    options: [
      "The Data Category of Region",
      "The Default Summarization on Region",
      "The Default Summarization on Sales",
      "The Data Category of Sales"
    ],
    correctAnswer: 2,
    explanation: "<strong>The Default Summarization on Sales</strong><br><br>By default, the column aggregation for Sales will be SUM. When Sales values are summarized (summed), rows with the same Region are combined into a single row showing the total. This is why four rows appear instead of six — duplicate regions are aggregated together.",
    category: "Data Modeling",
    tags: ["summarization", "aggregation", "default", "SUM", "visualization"]
  },
  {
    id: 144,
    question: "You need to create a custom visualization for Power BI.<br><br>What should you install first?",
    options: [
      "jQuery",
      "Node.js",
      "Microsoft Azure PowerShell",
      "Microsoft .NET"
    ],
    correctAnswer: 1,
    explanation: "<strong>Node.js</strong><br><br>To develop custom visuals, you need to have Node.js installed with Power BI tools (pbiviz) and a server certificate. The Power BI Visual Tools (pbiviz) are installed via npm, which requires Node.js.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/service-custom-visuals-getting-started-with-developer-tools' target='_blank'>Getting started with developer tools</a><br><a href='https://docs.microsoft.com/en-us/power-bi/developer/visuals/custom-visual-develop-tutorial' target='_blank'>Custom visual develop tutorial</a>",
    category: "Power BI Service",
    tags: ["custom visual", "Node.js", "development", "pbiviz", "developer tools"]
  },
  {
    id: 145,
    question: "You create a Power BI model that contains the sales for the last five years. The size of the model is 950 MB. The Sales table contains five million rows.<br><br>You need to minimize the model size and perform the following analysis:<br>• Current and one previous year sales for all active products<br>• Current year sales by product category<br><br>What should you do?",
    options: [
      "Remove the Product Status column.",
      "Remove the rows that relate to inactive products.",
      "Remove the rows that relate to sales that occurred more than two years earlier.",
      "Remove the Sale Date column."
    ],
    correctAnswer: 2,
    explanation: "<strong>Remove the rows that relate to sales that occurred more than two years earlier.</strong><br><br>Since the analysis only requires current and previous year data, removing rows older than two years will significantly reduce the model size from 950 MB. You cannot remove the Product Status column (needed to identify active products), inactive product rows (needed for previous year analysis), or the Sale Date column (needed for time-based analysis).",
    category: "Data Modeling",
    tags: ["model size", "optimization", "row reduction", "data reduction", "filtering"]
  },
  {
    id: 146,
    question: "What is the benefit of using a report tooltip?",
    options: [
      "To give users the ability to export data from the visual.",
      "To provide additional detail that is specific to the context of the data that is being hovered over.",
      "To give users additional information about a report visual, such as the author and date/time it was created."
    ],
    correctAnswer: 1,
    explanation: "<strong>To provide additional detail that is specific to the context of the data that is being hovered over.</strong><br><br>Report tooltips (also called report page tooltips) allow you to create rich, custom tooltip pages that appear when you hover over a visual. They display contextual detail relevant to the specific data point being hovered over, providing deeper insight without leaving the current page.",
    category: "Visualization",
    tags: ["tooltip", "report tooltip", "hover", "context", "visualization"]
  },
  {
    id: 147,
    question: "Do you need to import custom visuals each time you want to use them when you are developing a new report?",
    options: [
      "Yes, custom visuals must be imported from AppSource each time you start developing a new report.",
      "No, custom visuals are always available for selection under the Visualization pane.",
      "No, custom visuals only need to be imported once and will always remain in Power BI for future use in a new report."
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes, custom visuals must be imported from AppSource each time you start developing a new report.</strong><br><br>Custom visuals are not permanently added to Power BI Desktop's Visualization pane across all reports. Each new report file (.pbix) starts with the default set of visuals. You must import any custom visuals you need for each new report from AppSource or from a .pbiviz file.",
    category: "Visualization",
    tags: ["custom visual", "AppSource", "import", "visualization pane", "new report"]
  },
  {
    id: 148,
    question: "Which of the following filters are <strong>not</strong> available in Power BI reports?",
    options: [
      "Drillthrough",
      "Report level",
      "Page type",
      "Page level"
    ],
    correctAnswer: 2,
    explanation: "<strong>Page type</strong> is not a filter available in Power BI reports.<br><br>The available filter types in Power BI are:<br>• <strong>Visual level</strong> — applies to a single visual<br>• <strong>Page level</strong> — applies to all visuals on a page<br>• <strong>Report level</strong> — applies to all pages in the report<br>• <strong>Drillthrough</strong> — allows drilling into a focused page<br><br>\"Page type\" is not a valid filter type.",
    category: "Visualization",
    tags: ["filters", "report level", "page level", "drillthrough", "visual level"]
  },
  {
    id: 149,
    question: "How can you analyze performance of each of your report elements?",
    options: [
      "By using performance analyzer.",
      "By analyzing your metadata.",
      "By deleting unnecessary rows and columns to reduce your dataset size."
    ],
    correctAnswer: 0,
    explanation: "<strong>By using performance analyzer.</strong><br><br>The Performance analyzer tool in Power BI Desktop allows you to record and view performance metrics for each visual element in your report. It shows DAX query time, visual display time, and other metrics so you can identify and troubleshoot performance bottlenecks.",
    category: "Power BI Service",
    tags: ["performance analyzer", "optimization", "report elements", "bottleneck", "diagnostics"]
  },
  {
    id: 150,
    question: "Can you use bookmarks to create a slide show in Power BI?",
    options: [
      "No, you cannot, because bookmarks are not dynamic.",
      "Yes, you can, by adding buttons as navigation to go between saved bookmarks.",
      "No, you will require a specific visual to achieve this task."
    ],
    correctAnswer: 1,
    explanation: "<strong>Yes, you can, by adding buttons as navigation to go between saved bookmarks.</strong><br><br>Bookmarks capture the current state of a report page (filters, slicers, visual states, etc.). You can create a slide-show-like experience by creating multiple bookmarks and adding navigation buttons that move between them. Power BI also has a built-in Bookmark Navigator that can auto-generate navigation buttons.",
    category: "Power BI Service",
    tags: ["bookmarks", "slide show", "navigation", "buttons", "presentation"]
  },
  {
    id: 151,
    question: "You have a custom connector that returns ID, From, To, Subject, Body, and Has Attachments for every email sent during the past year. More than 10 million records are returned.<br><br>You build a report analyzing the internal networks of employees based on whom they send emails to.<br><br>You need to prevent report recipients from reading the analyzed emails. The solution must minimize the model size.<br><br>What should you do?",
    options: [
      "Implement row-level security (RLS) so that the report recipients can only see results based on the emails they sent.",
      "Remove the Subject and Body columns during the import.",
      "From Model view, set the Subject and Body columns to Hidden."
    ],
    correctAnswer: 1,
    explanation: "<strong>Remove the Subject and Body columns during the import.</strong><br><br>Removing the Subject and Body columns during import achieves both goals: it prevents report recipients from reading email content AND minimizes the model size (text columns with 10M+ rows consume significant space).<br><br>Incorrect answers:<br>• RLS doesn't prevent reading — users can still see their own emails, and it doesn't reduce model size.<br>• Hiding columns only hides them from the Fields pane but the data is still in the model and accessible, plus it doesn't reduce size.",
    category: "Data Modeling",
    tags: ["column removal", "model size", "security", "import", "data reduction", "privacy"]
  },
  {
    id: 152,
    question: "You create a dashboard by using the Microsoft Power BI Service. The dashboard contains a card visual that shows total sales from the current year.<br><br>You grant users access to the dashboard by using the Viewer role on the workspace.<br><br>A user wants to receive daily notifications of the number shown on the card visual.<br><br>You need to automate the notifications.<br><br>What should you do?",
    options: [
      "Create a data alert.",
      "Share the dashboard to the user.",
      "Create a subscription.",
      "Tag the user in a comment."
    ],
    correctAnswer: 2,
    explanation: "<strong>Create a subscription.</strong><br><br>You can subscribe yourself and colleagues to report pages, dashboards, and paginated reports. Power BI email subscriptions allow you to decide how often to receive emails (daily, weekly, hourly, monthly, or after data refresh) and choose the time.<br><br>Incorrect: <strong>Data alerts</strong> notify you when data changes <em>beyond limits you set</em> — they are threshold-based, not scheduled daily notifications.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-report-subscribe' target='_blank'>Subscribe to reports</a><br><a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts' target='_blank'>Set data alerts</a>",
    category: "Power BI Service",
    tags: ["subscription", "notifications", "daily", "dashboard", "email", "automation"]
  },
  {
    id: 153,
    question: "You have a line chart that shows the number of employees in a department over time.<br><br>You need to see the total salary costs of the employees when you hover over a data point.<br><br>What are two possible ways to achieve this goal?",
    options: [
      "Add a salary to the tooltips.",
      "Add a salary to the visual filters.",
      "Add salary to the drillthrough fields."
    ],
    correctAnswer: [0, 1],
    multiSelect: true,
    explanation: "<strong>Add a salary to the tooltips</strong> and <strong>Add a salary to the visual filters</strong>.<br><br><strong>A (Tooltips):</strong> Custom tooltips enable you to specify additional data points that display when hovering. Adding salary to tooltips will show total salary costs on hover.<br><br><strong>B (Visual filters):</strong> Visual-level filters apply to a single visual and can affect the data shown, including tooltip data. In the real exam, if only one answer is required, choose A (tooltips).<br><br><strong>C (Drillthrough)</strong> is incorrect because drillthrough requires right-clicking and navigating to another page — it doesn't show data on hover.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-custom-tooltips' target='_blank'>Custom tooltips</a>",
    category: "Visualization",
    tags: ["tooltip", "visual filter", "hover", "salary", "drillthrough"]
  },
  {
    id: 154,
    question: "You have a report that contains a bar chart and a column chart. The bar chart shows customer count by customer segment. The column chart shows sales by month.<br><br>You need to ensure that when a segment is selected in the bar chart, you see which portion of the total sales for the month belongs to the customer segment.<br><br>How should the visual interactions be set on the column chart when the bar chart is selected?",
    options: [
      "No impact",
      "Highlight",
      "Filter"
    ],
    correctAnswer: 1,
    explanation: "<strong>Highlight</strong><br><br>When you set the interaction to <strong>Highlight</strong>, selecting a segment in the bar chart will highlight the portion of each column in the column chart that belongs to the selected segment, while still showing the total. This lets you see both the total and the segment's contribution.<br><br>• <strong>Filter</strong> would show only the selected segment's data, hiding the total.<br>• <strong>No impact</strong> would not change the column chart at all.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions' target='_blank'>Visual interactions</a>",
    category: "Visualization",
    tags: ["visual interactions", "highlight", "filter", "cross-highlight", "bar chart"]
  },
  {
    id: 155,
    question: "<img src='images/q155-exhibit.png' alt='Question 155 Exhibit - Scatter plot with clusters' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a dataset named Pens that contains the following columns:<br>• Unit Price<br>• Quantity Ordered<br><br>You need to create a visualization that shows the relationship between Unit Price and Quantity Ordered. The solution must highlight orders that have a similar unit price and ordered quantity.<br><br>Which type of visualization and which feature should you use?",
    options: [
      "A scatter plot with automatically find clusters",
      "A line chart with trend line",
      "A column chart with drill down",
      "A bar chart with conditional formatting"
    ],
    correctAnswer: 0,
    explanation: "<strong>A scatter plot</strong> with <strong>Automatically find clusters</strong>.<br><br><strong>Scatter plot:</strong> A scatter chart has two value axes showing numerical data along horizontal and vertical axes. It displays points at the intersection of x and y values, making it perfect for showing relationships between two numeric variables.<br><br><strong>Automatically find clusters:</strong> Scatter charts can identify clusters — groups of data points with similar values. This feature highlights orders that have similar unit price and ordered quantity.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-scatter' target='_blank'>Scatter charts in Power BI</a>",
    category: "Visualization",
    tags: ["scatter chart", "clusters", "relationship", "visualization", "analytics"]
  },
  {
    id: 156,
    question: "You need to create a visualization that compares revenue and cost over time.<br><br>Which type of visualization should you use?",
    options: [
      "Stacked area chart",
      "Donut chart",
      "Line chart",
      "Waterfall chart"
    ],
    correctAnswer: 2,
    explanation: "<strong>Line chart</strong><br><br>A line chart displays the evolution of one or several numeric variables over time. Data points are connected by straight line segments. It is often used to visualize trends in data over intervals of time (a time series), making it ideal for comparing revenue and cost over time.<br><br><strong>Stacked area charts</strong> are not appropriate for comparing individual series because it's hard to distinguish values when stacked on top of each other.<br><br>Reference: <a href='https://www.data-to-viz.com/graph/line.html' target='_blank'>Line chart</a>",
    category: "Visualization",
    tags: ["line chart", "comparison", "revenue", "cost", "time series", "visualization"]
  },
  {
    id: 157,
    question: "You have a collection of reports for the HR department of your company.<br><br>You need to create a visualization for the HR department that shows historic employee counts and predicts trends during the next six months.<br><br>Which type of visualization should you use?",
    options: [
      "Key influencers",
      "Ribbon chart",
      "Line chart",
      "Scatter chart"
    ],
    correctAnswer: 2,
    explanation: "<strong>Line chart</strong><br><br>The line chart in Power BI has built-in forecasting capabilities that can predict trends based on historical data. You can add a forecast to a line chart to project future values (e.g., the next six months of employee counts). The line chart must have only one line for forecasting to work.<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/blog/introducing-new-forecasting-capabilities-in-power-view-for-office-365' target='_blank'>Forecasting capabilities in Power BI</a>",
    category: "Visualization",
    tags: ["line chart", "forecast", "prediction", "trend", "HR", "employee count"]
  },
  {
    id: 158,
    question: "You are developing a sales report that will have multiple pages. Each page will answer a different business question.<br><br>You plan to have a menu page that will show all the business questions.<br><br>You need to ensure that users can click each business question and be directed to the page where the question is answered. The solution must ensure that the menu page will work when deployed to any workspace.<br><br>What should you include on the menu page?",
    options: [
      "Create a text box for each business question and insert a link.",
      "Create a button for each business question and set the action type to Bookmark.",
      "Create a Power Apps visual that contains a drop-down list. The drop-down list will contain the business questions."
    ],
    correctAnswer: 1,
    explanation: "<strong>Create a button for each business question and set the action type to Bookmark.</strong><br><br>Buttons with Bookmark actions allow you to navigate between report pages. Each bookmark captures the state of a specific page, so clicking a button takes the user directly to that page. This solution works in any workspace without dependencies on external services.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/powerapps-custom-visual' target='_blank'>Power Apps visual</a>",
    category: "Power BI Service",
    tags: ["bookmarks", "buttons", "navigation", "menu page", "report design"]
  },
  {
    id: 159,
    question: "Which of the following is a common use case for scatter charts?",
    options: [
      "Show changes in values over time",
      "Show patterns in large sets of data",
      "Show comparisons across categories",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "<strong>Show patterns in large sets of data</strong><br><br>Common use cases for scatter charts include:<br>• Showing patterns in large sets of data<br>• Showing linear and non-linear trends<br>• Performing cluster analysis<br>• Identifying outliers<br><br>While scatter charts can technically show data over time, their primary strength is revealing patterns and relationships between two numeric variables in large datasets.",
    category: "Visualization",
    tags: ["scatter chart", "patterns", "large data", "use case", "visualization"]
  },
  {
    id: 160,
    question: "On which of the following chart types can you add a forecast based on a specific number of periods?",
    options: [
      "Scatter charts",
      "Line charts",
      "Clustered column charts",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "<strong>Line charts</strong><br><br>Only line charts have the forecast option in the chart Analytics pane. You can configure the forecast length (number of periods), confidence interval, and seasonality. Scatter charts and column charts do not support the built-in forecasting feature.",
    category: "Visualization",
    tags: ["line chart", "forecast", "analytics", "prediction", "chart type"]
  },
  {
    id: 161,
    question: "The Q&A visual lets you explore data \"in your own words\" using what?",
    options: [
      "DAX",
      "M Code",
      "Natural language queries",
      "SQL"
    ],
    correctAnswer: 2,
    explanation: "<strong>Natural language queries</strong><br><br>The Q&A visual in Power BI allows users to type questions in natural language (plain English) and get visual answers. It interprets the question and automatically generates appropriate visualizations from the data model.",
    category: "Power BI Service",
    tags: ["Q&A", "natural language", "queries", "explore data", "visual"]
  },
  {
    id: 162,
    question: "Which of the following filter options applies only to the specific visual in which it is defined?",
    options: [
      "Visual level",
      "Page level",
      "Report level",
      "Drill through"
    ],
    correctAnswer: 0,
    explanation: "<strong>Visual level</strong><br><br>Visual level filters apply only to the specific visual in which they are defined. They do not affect any other visuals on the page or in the report.<br><br>• <strong>Page level</strong> — applies to all visuals on the page<br>• <strong>Report level</strong> — applies to all visuals across all pages<br>• <strong>Drill through</strong> — creates a focused page you navigate to via right-click",
    category: "Visualization",
    tags: ["filters", "visual level", "scope", "single visual", "filter types"]
  },
  {
    id: 163,
    question: "Which filter setting would you use if you wanted to return the top 3 categories by total profit?",
    options: [
      "Basic",
      "Advanced",
      "Top N",
      "Dynamic"
    ],
    correctAnswer: 2,
    explanation: "<strong>Top N</strong><br><br>The Top N filter option allows you to filter the top (or bottom) N items by a specified value or measure. For example, you can filter to show only the top 3 categories by total profit by setting N=3 and the value to the profit measure.",
    category: "Power BI Service",
    tags: ["Top N", "filter", "categories", "profit", "ranking"]
  },
  {
    id: 164,
    question: "What object could you add to a dashboard if the user would like an interactive way to sort and filter the data using dates?",
    options: [
      "Categorical Slicer",
      "Date Slicer",
      "Top N Filter",
      "Report Level Filter"
    ],
    correctAnswer: 1,
    explanation: "<strong>Date Slicer</strong><br><br>Slicers provide an interactive way for users to sort and filter a report. Date slicers are specifically designed for date fields, offering a range slider, calendar picker, or relative date options that make date-based filtering intuitive and interactive.",
    category: "Visualization",
    tags: ["date slicer", "filter", "interactive", "dates", "dashboard"]
  },
  {
    id: 165,
    question: "What visual could you use if you wanted to understand the factors that drive a specific metric?",
    options: [
      "Decomposition Tree",
      "Line Chart",
      "Key Influencers",
      "Treemap"
    ],
    correctAnswer: 2,
    explanation: "<strong>Key Influencers</strong><br><br>The Key Influencers visual helps you understand the factors that drive a specific metric. It analyzes the data, ranks the factors that matter, and displays them as key influencers. It uses AI to determine which variables have the most impact on the metric you're analyzing.",
    category: "Visualization",
    tags: ["key influencers", "AI visual", "factors", "drivers", "metric analysis"]
  },
  {
    id: 166,
    question: "Which visual allows you to break down a measure across multiple dimensions?",
    options: [
      "Decomposition Tree",
      "Line Chart",
      "Key Influencers",
      "Treemap"
    ],
    correctAnswer: 0,
    explanation: "<strong>Decomposition Tree</strong><br><br>The Decomposition Tree visual allows you to perform exploratory analysis by successively breaking down a measure across multiple dimensions. It lets you drill into data hierarchically, choosing which dimension to expand at each level, making it ideal for ad-hoc root cause analysis.",
    category: "Visualization",
    tags: ["decomposition tree", "AI visual", "breakdown", "dimensions", "exploratory analysis"]
  },
  {
    id: 167,
    question: "Which of the following filter options applies to all visuals across all pages of the report?",
    options: [
      "Visual level",
      "Page level",
      "Report level",
      "Drill through"
    ],
    correctAnswer: 2,
    explanation: "<strong>Report level</strong><br><br>Report level filters apply to all visuals across all pages of the report. This is the broadest filter scope available.<br><br>• <strong>Visual level</strong> — applies to a single visual only<br>• <strong>Page level</strong> — applies to all visuals on one page<br>• <strong>Drill through</strong> — navigates to a focused detail page",
    category: "Power BI Service",
    tags: ["filters", "report level", "all pages", "scope", "filter types"]
  },
  {
    id: 168,
    question: "You have a workspace that contains 10 dashboards. A dashboard named Sales Data displays data from two datasets. You discover that users are unable to find data on the dashboard by using natural language queries.<br><br>You need to ensure that the users can find data by using natural language queries.<br><br>What should you do?",
    options: [
      "From the settings of the workspace, modify the Language Settings.",
      "From the Sales Data dashboard, set the dashboard as a Favorite.",
      "From the properties of the datasets, modify the Q&A and Cortana settings.",
      "From the properties of the dashboard, modify the Q&A settings."
    ],
    correctAnswer: 2,
    explanation: "<strong>From the properties of the datasets, modify the Q&A and Cortana settings.</strong><br><br>Q&A settings are configured at the <strong>dataset</strong> level, not the dashboard level. You need to go to the dataset properties and enable/configure the Q&A and Cortana settings to allow natural language queries against the data.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-q-and-a-direct-query#limitations-during-public-preview' target='_blank'>Q&A for DirectQuery</a>",
    category: "Power BI Service",
    tags: ["Q&A", "Cortana", "dataset settings", "natural language", "dashboard"]
  },
  {
    id: 169,
    question: "<img src='images/q169-exhibit-1.png' alt='Question 169 Exhibit - Date table columns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are creating a report in Power BI Desktop. You are consuming the tables shown above.<br><br>Date[Date] is in mm/dd/yyyy format. Date[DateKey] is in ddmmyyyy format. Date[MonthNumber] is in mm format. Date[MonthName] is in mmm format.<br><br>You create the report shown in the exhibit:<br><br><img src='images/q169-exhibit-2.jpeg' alt='Question 169 Exhibit - Report with unsorted months' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to ensure that the months appear in the order of the calendar.<br><br>How should you sort the MonthName column?",
    options: [
      "By MonthNumber",
      "Ascending",
      "Descending",
      "By DateKey"
    ],
    correctAnswer: 0,
    explanation: "<strong>By MonthNumber</strong><br><br>MonthName sorted alphabetically would show Apr, Aug, Dec, Feb... instead of Jan, Feb, Mar, Apr... To display months in calendar order, you use the <strong>Sort by Column</strong> feature to sort MonthName by MonthNumber (01, 02, 03... 12). This ensures months appear in chronological order.<br><br>Reference: <a href='http://ppmworks.com/sorting-month-names-chronologically-in-microsoft-power-bi-reports/' target='_blank'>Sorting month names chronologically</a>",
    category: "Data Modeling",
    tags: ["sort by column", "MonthName", "MonthNumber", "calendar order", "date table"]
  },
  {
    id: 170,
    question: "You plan to develop a Power BI report that has a bar chart to display the number of customers by location.<br><br>You have a table named Customer that has the following columns:<br>• CustomerID<br>• CustomerName<br>• Address<br>• City<br>• ProvState<br>• Country<br><br>You need to allow users to drill down by location. The report will display the number of each customer by Country, and drill down to ProvState, and then to City.<br><br>How should you configure the drill down in the bar chart?",
    options: [
      "In the Legend field, add Country. In the Axis field, add ProvState at the top, followed by City.",
      "In the Value field, add Country at the top, followed by ProvState, and then City.",
      "In the Value field, add Country. In the Legend field, add ProvState at the top, followed by City.",
      "In the Axis field, add Country at the top, followed by ProvState, and then City."
    ],
    correctAnswer: 3,
    explanation: "<strong>In the Axis field, add Country at the top, followed by ProvState, and then City.</strong><br><br>For drill-down functionality in a bar chart, you drag and drop the fields in hierarchical order into the same <strong>Axis</strong> bucket. The topmost field (Country) is the starting level, and users can drill down through ProvState and then City. The Values bucket holds the measure (customer count), not the drill-down hierarchy.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/power-bi-visualization-drill-down' target='_blank'>Drill down in Power BI</a>",
    category: "Visualization",
    tags: ["drill down", "axis", "hierarchy", "bar chart", "location", "visualization"]
  },
  {
    id: 171,
    question: "You have a Power BI report that displays a bar chart and a donut chart on the same page. The bar chart shows the total sales by year and the donut chart shows the total sales by category.<br><br>You need to ensure that when you select a year on the bar chart, the donut chart remains unchanged.<br><br>What should you do?",
    options: [
      "Edit the interactions from the Format menu.",
      "Set a visual level filter on the bar chart.",
      "Set a visual level filter on the donut chart.",
      "Add a slicer to the page that uses the year column."
    ],
    correctAnswer: 0,
    explanation: "<strong>Edit the interactions from the Format menu.</strong><br><br>There are three states for visual interactions in Power BI:<br>• <strong>Highlight</strong> — the default cross-filtering with shading<br>• <strong>Filter</strong> — cross-filtering to show contextual values only<br>• <strong>None</strong> — do not filter or highlight<br><br>Select the bar chart, go to <strong>Format > Edit Interactions</strong>, then set the donut chart's interaction to <strong>None</strong>. This prevents the donut chart from reacting when a year is selected on the bar chart.<br><br>Reference: <a href='https://www.excelguru.ca/blog/2016/11/23/visual-interactions-in-power-bi/' target='_blank'>Visual interactions in Power BI</a>",
    category: "Visualization",
    tags: ["visual interactions", "edit interactions", "none", "format menu", "cross-filter"]
  },
  {
    id: 172,
    question: "<img src='images/q172-exhibit.png' alt='Question 172 Exhibit - KPI visualization in matrix' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a Power Pivot model that includes a KPI.<br><br>You need to create a visualization based on the Power Pivot model as shown in the exhibit above.<br><br>Which type of visualization should you use?",
    options: [
      "Matrix",
      "KPI",
      "Multi row card",
      "Table"
    ],
    correctAnswer: 0,
    explanation: "<strong>Matrix</strong><br><br>The exhibit shows a hierarchical layout with grouped rows and sub-totals — this is characteristic of a <strong>Matrix</strong> visual. A Table visual would not have the empty-line formatting and hierarchical grouping shown for the Year column. The Matrix visual supports row grouping, column grouping, and subtotals, making it ideal for displaying KPI data in a structured, hierarchical format.<br><br>Reference: <a href='https://www.biinsight.com/use-kpi-in-table-matrix-and-card-visualisations-in-power-bi/#more-4478' target='_blank'>Use KPI in Table, Matrix and Card Visuals</a>",
    category: "Visualization",
    tags: ["matrix", "KPI", "visualization", "Power Pivot", "hierarchy", "table"]
  },
  {
    id: 173,
    question: "<img src='images/q173-exhibit-1.jpeg' alt='Question 173 Exhibit - Report with parameter' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have the report shown in the exhibit above.<br><br>Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.<br><br><img src='images/q173-exhibit-2.png' alt='Question 173 Exhibit - Drop-down answer choices' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Which feature was used and what is the maximum value?",
    options: [
      "New Parameter with maximum value 0,5",
      "New Parameter with maximum value 1,0",
      "New Measure with maximum value 0,5",
      "New Quick Measure with maximum value 1,0"
    ],
    correctAnswer: 0,
    explanation: "<strong>New Parameter</strong> with maximum value <strong>0,5</strong>.<br><br>When using <strong>New Parameter</strong> in Power BI Desktop, it automatically creates a <code>GENERATESERIES</code> function. In the GENERATESERIES function, the second parameter is the maximum value, which in this case is <strong>0,5</strong>. The New Parameter feature creates a What-If parameter that generates a table of values users can interact with via a slicer.",
    category: "Data Modeling",
    tags: ["parameter", "GENERATESERIES", "what-if", "slicer", "maximum value"]
  },
  {
    id: 174,
    question: "<img src='images/q174-exhibit-1.jpeg' alt='Question 174 Exhibit - Visualization with raw values' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have the visualization shown above.<br><br>You need to display the values as shown below:<br><br><img src='images/q174-exhibit-2.jpeg' alt='Question 174 Exhibit - Visualization with percentage values' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>What should you do?",
    options: [
      "Create a calculated column that adds the % symbol to the values.",
      "From the Modeling tab, change the Data Type to Percentage.",
      "Edit the query of the data source and change the Data Type to Percentage.",
      "Create a measure that adds the % symbol to the values."
    ],
    correctAnswer: 1,
    explanation: "<strong>From the Modeling tab, change the Data Type to Percentage.</strong><br><br>Go to Table View, then on the Modeling ribbon tab, change the Data Type to \"Percentage\" and keep 2 decimal places. This is the simplest and most correct approach — it formats the values as percentages throughout the report without creating calculated columns or measures.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-radial-gauge-charts' target='_blank'>Radial gauge charts</a>",
    category: "Data Modeling",
    tags: ["percentage", "data type", "Modeling tab", "formatting", "visualization"]
  },
  {
    id: 175,
    question: "You create a KPI visualization in Power BI Desktop that uses the month as the trend axis.<br><br>You discover that the data is not sorted by month.<br><br>You need to change the sort order of the visualization.<br><br>What should you do first?",
    options: [
      "Convert the visualization to a different type.",
      "Remove the trend axis from the visualization.",
      "Modify the visual level filters.",
      "Modify the drillthrough filters."
    ],
    correctAnswer: 0,
    explanation: "<strong>Convert the visualization to a different type.</strong><br><br>KPI visuals do <strong>not</strong> have a sort option. To fix the month sort order, you must first convert the KPI to a different visual type (e.g., table or bar chart). Then go to Table View, select the month column, and use <strong>Sort by Column</strong> under the Table Tools ribbon to sort the text month by month number. After confirming the correct order, convert back to the KPI visual.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi#how-to-create-a-kpi' target='_blank'>How to create a KPI</a>",
    category: "Visualization",
    tags: ["KPI", "sort", "convert visual", "trend axis", "month order"]
  },
  {
    id: 176,
    question: "You are creating a Power BI Desktop report that has several bar charts and a date slicer.<br><br>You need to create a slide show that can be viewed from the Power BI service. Each slide must display the charts filtered for a different year.<br><br>What should you do before you publish the report?",
    options: [
      "Configure report level filters, and then create groups that use the List group type.",
      "Configure drillthrough filters for each bar chart, and then select Selection Pane.",
      "Filter the bar charts by using the slicer, and then create bookmarks.",
      "Configure page level filters, and then create groups that use the Bin group type."
    ],
    correctAnswer: 2,
    explanation: "<strong>Filter the bar charts by using the slicer, and then create bookmarks.</strong><br><br>Bookmarks capture the current state of a report page including filters, slicers, and visual states. To create a slide show:<br>1. Use the date slicer to select a year<br>2. Create a bookmark for that state<br>3. Repeat for each year<br>4. Use the bookmarks to step through like a PowerPoint presentation<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/desktop-bookmarks' target='_blank'>Bookmarks in Power BI Desktop</a>",
    category: "Visualization",
    tags: ["bookmarks", "slide show", "slicer", "filter", "presentation", "publish"]
  },
  {
    id: 177,
    question: "<img src='images/q177-exhibit.png' alt='Question 177 Exhibit - Publish to Web and Report Server comparison' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have three Power BI Desktop projects:<br>• <strong>Report1.pbix</strong> — contains a custom visualization<br>• <strong>Report2.pbix</strong> — implements row-level security (RLS)<br>• <strong>Report3.pbix</strong> — connects to SQL Server using DirectQuery<br><br>Which reports support <strong>Publish to Web</strong>, and which can be published to <strong>Power BI Report Server</strong>?",
    options: [
      "Publish to Web: Report1 and Report3 | Report Server: Report1, Report2, and Report3",
      "Publish to Web: Report1 only | Report Server: Report2 and Report3",
      "Publish to Web: Report1, Report2, and Report3 | Report Server: Report1 and Report3",
      "Publish to Web: Report3 only | Report Server: Report1 and Report2"
    ],
    correctAnswer: 0,
    explanation: "<strong>Publish to Web: Report1 and Report3</strong><br><strong>Power BI Report Server: Report1, Report2, and Report3</strong><br><br><strong>Publish to Web</strong> does NOT support reports using:<br>• Row-level security (RLS) — so Report2 is excluded<br>• Live Connection data sources (but DirectQuery IS supported — so Report3 works)<br>• Custom visuals are supported — so Report1 works<br><br><strong>Power BI Report Server</strong> supports:<br>• Custom visuals (except R/Python) — Report1 ✓<br>• Row-level security in both DirectQuery and Import mode — Report2 ✓<br>• DirectQuery connections — Report3 ✓<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web#limitations' target='_blank'>Publish to Web limitations</a><br><a href='https://docs.microsoft.com/en-us/power-bi/report-server/compare-report-server-service' target='_blank'>Compare Report Server and Service</a>",
    category: "Power BI Service",
    tags: ["Publish to Web", "Report Server", "RLS", "DirectQuery", "custom visual", "limitations"]
  },
  {
    id: 178,
    question: "You have a Power BI data model that contains the following three tables:<br>• Sales<br>• Date<br>• Product<br><br>The Sales table is related to the Date and Product tables by using many-to-one relationships. The Sales table contains a column named Total Sales Amount.<br><br>You need to create a measure named Total Sales that can be used in visuals to aggregate Total Sales Amounts by product or by date.<br><br>What should you use?",
    options: [
      "Total Sales = SUM('Sales'[Total Sales Amount])",
      "Total Sales = ALL('Sales'[Total Sales Amount])",
      "Total Sales = MAX('Sales'[Total Sales Amount])",
      "Total Sales = CALCULATE([Total Sales])"
    ],
    correctAnswer: 0,
    explanation: "<strong>Total Sales = SUM('Sales'[Total Sales Amount])</strong><br><br>The <code>SUM</code> function aggregates (adds up) all values in the Total Sales Amount column. When used in a visual with Product or Date dimensions, the many-to-one relationships automatically filter the Sales table, so SUM correctly totals the sales for each product or date context.<br><br>• <code>ALL</code> returns a table, not an aggregated value<br>• <code>MAX</code> would return only the highest single value, not the total<br>• <code>CALCULATE([Total Sales])</code> references itself without a base aggregation",
    category: "DAX",
    tags: ["SUM", "measure", "DAX", "aggregation", "many-to-one", "Sales"]
  },
  {
    id: 179,
    question: "You are creating a visualization in a Power BI report. You need to recommend which visualization to use in the report to perform a quick comparison of the current quarter sales by country.<br><br>Which visualization type should you recommend?",
    options: [
      "Matrix",
      "Column chart",
      "Scatter chart",
      "Gauge chart"
    ],
    correctAnswer: 1,
    explanation: "<strong>Column chart</strong><br><br>A column chart is ideal for quickly comparing values across categories. It displays sales for each country as vertical bars, making it easy to visually compare which countries have higher or lower sales in the current quarter.<br><br>• <strong>Matrix</strong> — better for detailed tabular data, not quick visual comparison<br>• <strong>Scatter chart</strong> — shows relationships between two numeric variables<br>• <strong>Gauge chart</strong> — shows a single value against a target, not comparisons across categories",
    category: "Visualization",
    tags: ["column chart", "comparison", "sales", "country", "visualization"]
  },
  {
    id: 180,
    question: "You plan to visualize your data using a Word Cloud visual from AppSource.<br><br>You need to add the visual to your report page.<br><br>What should you do?",
    options: [
      "From the Visualization Pane, select Get More Visuals.",
      "From the Visualization Pane, select Import a visual from a file.",
      "Add a Python visual to the report page.",
      "Add a Paginated report visual to the report page."
    ],
    correctAnswer: 0,
    explanation: "<strong>From the Visualization Pane, select Get More Visuals.</strong><br><br>To add an AppSource visual like Word Cloud, click the ellipsis (...) or \"Get more visuals\" icon in the Visualization Pane. This opens the AppSource marketplace where you can search for and download the Word Cloud visual directly into your report.<br><br>• \"Import a visual from a file\" is for .pbiviz files saved locally, not AppSource<br>• Python and Paginated report visuals are unrelated to AppSource custom visuals",
    category: "Visualization",
    tags: ["AppSource", "custom visual", "Word Cloud", "Get More Visuals", "Visualization Pane"]
  },
  {
    id: 181,
    question: "You have a report that includes a card visualization.<br><br>You need to apply the following conditional formatting to the card while minimizing design effort:<br>• For values that are greater than or equal to 100, the font of the data label must be dark red.<br>• For values that are less than 100, the font of the data label must be dark gray.<br><br><img src='images/q181-exhibit-1.jpg' alt='Question 181 Exhibit - Conditional formatting option on card' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><img src='images/q181-exhibit-2.png' alt='Question 181 Exhibit - Conditional formatting dialog' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><img src='images/q181-exhibit-3.jpg' alt='Question 181 Exhibit - Rules configuration' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Which type of format should you use?",
    options: [
      "Color scale",
      "Rules",
      "Field value"
    ],
    correctAnswer: 1,
    explanation: "<strong>Rules</strong><br><br>To apply conditional formatting on a card visual, go to the Format tab, expand <strong>Data Label</strong>, hover over the color option, and click the three-dot icon for <strong>Conditional Formatting</strong>.<br><br>The <strong>Rules</strong> format type allows you to define custom rules such as:<br>• If value ≥ 100, set font color to dark red<br>• If value < 100, set font color to dark gray<br><br>• <strong>Color scale</strong> applies a gradient, not discrete color thresholds<br>• <strong>Field value</strong> requires a column with color values in the data<br><br>Reference: <a href='https://radacad.com/enhance-the-card-visual-in-power-bi-with-conditional-formatting' target='_blank'>Conditional formatting on card visuals</a>",
    category: "Visualization",
    tags: ["conditional formatting", "card visual", "rules", "data label", "font color"]
  },
  {
    id: 182,
    question: "<img src='images/q182-exhibit-1.jpg' alt='Question 182 Exhibit - Table visual with indicator colors' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to create a visual as shown in the exhibit above. The indicator color for Total Sales will be based on % Growth to Last Year. The solution must use the existing calculations only.<br><br><img src='images/q182-exhibit-2.png' alt='Question 182 Exhibit - Answer dropdowns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>How should you configure the visual?<br><br><strong>Conditional formatting:</strong> [Select one]<br><strong>Format by:</strong> [Select one]",
    options: [
      "Conditional formatting: Background color | Format by: Rules",
      "Conditional formatting: Font color | Format by: Color scale",
      "Conditional formatting: Icons | Format by: Field value",
      "Conditional formatting: Data bars | Format by: Rules"
    ],
    correctAnswer: 0,
    explanation: "<strong>Conditional formatting: Background color</strong><br><strong>Format by: Rules</strong><br><br>The exhibit shows cells with colored backgrounds (indicator colors) for Total Sales based on % Growth to Last Year. This requires:<br><br>• <strong>Background color</strong> — the indicator is applied as a cell background color, not font color, icons, or data bars<br>• <strong>Rules</strong> — since the solution must use existing calculations (the \"% Growth to Last Year\" measure), Rules lets you define thresholds based on that measure without creating additional columns with color values (which Field value would require)<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting' target='_blank'>Conditional table formatting</a>",
    category: "Visualization",
    tags: ["conditional formatting", "background color", "rules", "table visual", "indicator"]
  },
  {
    id: 183,
    question: "You have a Microsoft Power BI report that contains two pages. The first page contains a clustered bar chart.<br><br>You plan to configure the clustered bar chart to use the second page as a tooltip report.<br><br>What should be done on the second page?",
    options: [
      "The Allow Q&A setting must be enabled.",
      "The Allow use as tooltip setting must be enabled.",
      "The canvas background transparency must be set to 100%.",
      "The Canvas setting must be set to Tooltip."
    ],
    correctAnswer: 1,
    explanation: "<strong>The Allow use as tooltip setting must be enabled.</strong><br><br>To use a report page as a custom tooltip, you must enable the <strong>Allow use as tooltip</strong> option in the page's format settings. This tells Power BI that the page is designed to be displayed as a tooltip when hovering over visuals on other pages. The canvas size will automatically adjust to tooltip dimensions.",
    category: "Visualization",
    tags: ["tooltip", "report page tooltip", "allow use as tooltip", "clustered bar chart"]
  },
  {
    id: 184,
    question: "You create a Microsoft Power BI report that will be accessed by hundreds of users on their laptops. The report contains one page. The page size is set to the custom dimensions of 2500 x 3500.<br><br>You set Page view to Actual size and publish the report to the Power BI service.<br><br>What is the resulting user experience?",
    options: [
      "A page background image with a misconfigured aspect ratio.",
      "A page that requires users to interact with scrollbars to view the entire page.",
      "A page that requires users to zoom out to read the visuals.",
      "A page with a large area of wallpaper shown at the bottom of the page."
    ],
    correctAnswer: 1,
    explanation: "<strong>A page that requires users to interact with scrollbars to view the entire page.</strong><br><br>Custom dimensions of 2500 x 3500 are much larger than a typical laptop screen resolution. When Page view is set to <strong>Actual size</strong>, the report renders at its true pixel dimensions without scaling. Since the page exceeds the viewport, users must use scrollbars (both horizontal and vertical) to navigate and view the entire page.",
    category: "Power BI Service",
    tags: ["page size", "actual size", "scrollbars", "custom dimensions", "page view"]
  },
  {
    id: 185,
    question: "You have a Power BI report that contains a clustered column chart visual. The visual shows the revenue on the y-axis and the month on the x-axis.<br><br>You need to ensure that users can drill down from month to week to day.<br><br>To what should you add the Week and Day fields?",
    options: [
      "Legend",
      "Small Multiples",
      "X-axis",
      "Y-axis"
    ],
    correctAnswer: 2,
    explanation: "<strong>X-axis</strong><br><br>To enable drill-down in a clustered column chart, you add fields in hierarchical order to the same axis bucket. Since Month is already on the X-axis, adding Week and Day to the X-axis (below Month) creates a drill-down hierarchy: Month → Week → Day. The Y-axis holds the measure (revenue), and Legend/Small Multiples serve different purposes.",
    category: "Visualization",
    tags: ["drill down", "X-axis", "hierarchy", "column chart", "week", "day"]
  },
  {
    id: 186,
    question: "You have a report that contains a bar chart and a pie chart. The interactions use the default settings.<br><br>You need to ensure that when you select a bar, the pie chart redraws showing <strong>only</strong> the data related to the bar.<br><br>You enable Edit Interactions.<br><br>What should you do next?",
    options: [
      "Select the pie chart and set the bar chart interaction to Filter.",
      "Select the pie chart and set the bar chart interaction to None.",
      "Select the bar chart and set the pie chart interaction to Filter.",
      "Select the bar chart and set the pie chart interaction to None."
    ],
    correctAnswer: 2,
    explanation: "<strong>Select the bar chart and set the pie chart interaction to Filter.</strong><br><br>To configure how one visual affects another:<br>1. Select the <strong>source</strong> visual (bar chart — the one being clicked)<br>2. Set the interaction on the <strong>target</strong> visual (pie chart) to <strong>Filter</strong><br><br>The <strong>Filter</strong> interaction redraws the pie chart showing only data related to the selected bar. The default <strong>Highlight</strong> would shade the relevant portion but still show all data. <strong>None</strong> would prevent any interaction.",
    category: "Visualization",
    tags: ["visual interactions", "filter", "edit interactions", "bar chart", "pie chart"]
  },
  {
    id: 187,
    question: "You plan to analyze sales data in Power BI by using the following fields:<br>• Sales amount<br>• Order Quantity<br>• Product<br><br>You need to use clustering to identify groups of similar data points in a subset of your data.<br><br>What visualization type should you use?",
    options: [
      "Line chart",
      "Scatter chart",
      "Tree map",
      "Waterfall chart"
    ],
    correctAnswer: 1,
    explanation: "<strong>Scatter chart</strong><br><br>Scatter charts are the only Power BI visualization that supports the built-in <strong>Automatically find clusters</strong> feature. By placing Sales amount and Order Quantity on the axes and Product as details, the scatter chart can identify groups of similar data points using clustering analysis. Line charts, tree maps, and waterfall charts do not have this clustering capability.",
    category: "Visualization",
    tags: ["scatter chart", "clustering", "similar data points", "analytics", "visualization"]
  },
  {
    id: 188,
    question: "You are reviewing the attendance data for a school in a Power BI report. The report contains a bar chart that shows the average attendance by grade.<br><br>You need to analyze the causes for different attendance across grades. The solution must NOT add a new visual to the page.<br><br>What feature should you use?",
    options: [
      "Analyze: Find where this distribution is different",
      "Find anomalies",
      "Spotlight",
      "Summarize"
    ],
    correctAnswer: 0,
    explanation: "<strong>Analyze: Find where this distribution is different</strong><br><br>The <strong>Analyze</strong> feature (right-click on a data point → Analyze → Find where this distribution is different) helps identify factors that cause differences in the distribution across categories. It analyzes the data behind the visual without adding a new visual to the page — it shows results in a pop-up analysis pane.<br><br>• <strong>Spotlight</strong> only dims other visuals to draw attention — it doesn't analyze causes<br>• <strong>Find anomalies</strong> identifies outliers in time series, not distribution causes<br>• <strong>Summarize</strong> provides a text summary, not causal analysis",
    category: "Power BI Service",
    tags: ["Analyze", "distribution", "causes", "attendance", "insight"]
  },
  {
    id: 189,
    question: "What is a dashboard?",
    options: [
      "A canvas of report elements that can be built in Power BI Desktop.",
      "Dashboards can be built by using visuals that are developed with an underlying data source.",
      "A canvas of report elements that can be built in the Power BI service.",
      "The canvas in which you can view the data model of a report."
    ],
    correctAnswer: 2,
    explanation: "<strong>A canvas of report elements that can be built in the Power BI service.</strong><br><br>A Power BI dashboard is a single-page canvas (also called a \"canvas\") that can only be created in the <strong>Power BI service</strong> (not in Power BI Desktop). It contains tiles pinned from reports, Q&A, Excel, SSRS, and other sources. Dashboards provide a consolidated view across multiple reports and datasets.",
    category: "Power BI Service",
    tags: ["dashboard", "Power BI service", "canvas", "tiles", "definition"]
  },
  {
    id: 190,
    question: "What is one way that reports and dashboards differ?",
    options: [
      "In reports, you can have multiple pages; in dashboards, you can have only one page.",
      "In reports, you can use the slicers and filter by selecting a data point on a visual; in dashboards, you can only filter a dashboard tile in focus mode, but can't save the filter.",
      "You can only build reports and dashboards in Power BI service.",
      "They are the same."
    ],
    correctAnswer: 0,
    explanation: "<strong>In reports, you can have multiple pages; in dashboards, you can have only one page.</strong><br><br>Key differences between reports and dashboards:<br>• <strong>Reports</strong> can have multiple pages; <strong>dashboards</strong> are always a single page<br>• Reports are created in Power BI Desktop or the service; dashboards are created only in the service<br>• Reports support slicers and interactive filtering; dashboards have limited filtering<br>• Reports connect to one dataset; dashboards can pin visuals from multiple reports/datasets",
    category: "Power BI Service",
    tags: ["report", "dashboard", "differences", "multiple pages", "single page"]
  },
  {
    id: 191,
    question: "Can a dashboard be created from multiple reports?",
    options: [
      "No, dashboards can only be created from a single dataset or report.",
      "Yes, dashboards can be created from multiple datasets or reports."
    ],
    correctAnswer: 1,
    explanation: "<strong>Yes, dashboards can be created from multiple datasets or reports.</strong><br><br>One of the key strengths of Power BI dashboards is their ability to consolidate visuals from multiple reports and datasets onto a single page. You can pin tiles from different reports, Q&A results, Excel workbooks, and SSRS reports to create a unified view.",
    category: "Power BI Service",
    tags: ["dashboard", "multiple reports", "multiple datasets", "pin", "consolidate"]
  },
  {
    id: 192,
    question: "Where can you configure and set alerts?",
    options: [
      "Data alerts can be set only in Power BI service on specific visuals such as KPI cards, gauges, and cards.",
      "Data alerts can be set in both Power BI service and Power BI Desktop on any kind of visual.",
      "Data alerts can be set in Power BI service on any kind of visual.",
      "Data alerts can be set only in Power BI Desktop on specific kinds of visuals such as KPI cards and gauges."
    ],
    correctAnswer: 0,
    explanation: "<strong>Data alerts can be set only in Power BI service on specific visuals such as KPI cards, gauges, and cards.</strong><br><br>Data alerts are a Power BI service feature (not available in Desktop). They can only be configured on visuals that display a single numeric value: <strong>KPI cards</strong>, <strong>gauge charts</strong>, and <strong>card visuals</strong>. Alerts notify you when data changes beyond thresholds you set.",
    category: "Visualization",
    tags: ["data alerts", "Power BI service", "KPI", "gauge", "card", "threshold"]
  },
  {
    id: 193,
    question: "What is a key benefit of Power BI's real-time streaming capabilities?",
    options: [
      "Users are limited to the data refresh as established by the developer.",
      "You can stream data and update dashboards as soon as the data is logged."
    ],
    correctAnswer: 1,
    explanation: "<strong>You can stream data and update dashboards as soon as the data is logged.</strong><br><br>Power BI's real-time streaming allows data to flow into dashboards as soon as it is generated, without waiting for scheduled refreshes. This enables live monitoring scenarios such as IoT sensor data, social media feeds, and operational dashboards that update in near real-time.",
    category: "Power BI Service",
    tags: ["real-time streaming", "live data", "dashboard update", "streaming dataset"]
  },
  {
    id: 194,
    question: "Pinning an entire report page to a dashboard ensures what?",
    options: [
      "Users are seeing individual tiles displaying key results.",
      "Pinning a page is an easy way to pin more than one visualization at a time. Also, when you pin an entire page, the tiles are live; you can interact with them right there on the dashboard."
    ],
    correctAnswer: 1,
    explanation: "<strong>Pinning a page is an easy way to pin more than one visualization at a time, and the tiles are live and interactive.</strong><br><br>When you pin an entire report page to a dashboard, all the visuals on that page appear as a single live tile. Unlike individual pinned tiles, a live page tile preserves the interactivity — you can click and interact with the visuals directly on the dashboard.",
    category: "Visualization",
    tags: ["pin page", "dashboard", "live tile", "interactive", "multiple visuals"]
  },
  {
    id: 195,
    question: "What feature allows you to ask a natural-language query about the data?",
    options: [
      "The synonym feature",
      "The smart narrative visual",
      "The Q&A feature"
    ],
    correctAnswer: 2,
    explanation: "<strong>The Q&A feature</strong><br><br>The <strong>Q&A</strong> feature in Power BI allows users to type questions in natural language and receive visual answers. It interprets the query, identifies relevant tables and columns, and generates an appropriate visualization.<br><br>• <strong>Synonyms</strong> help Q&A understand alternative terms but don't provide the query interface<br>• <strong>Smart narrative</strong> generates text summaries but doesn't accept natural-language input",
    category: "Power BI Service",
    tags: ["Q&A", "natural language", "query", "feature", "ask questions"]
  },
  {
    id: 196,
    question: "What feature in dashboards is used to alert consumers to the sensitivity of the data?",
    options: [
      "Dashboard themes",
      "Data classification"
    ],
    correctAnswer: 1,
    explanation: "<strong>Data classification</strong><br><br><strong>Data classification</strong> labels (such as Confidential, Internal, Public) can be applied to dashboards to alert consumers about the sensitivity level of the data. This helps organizations communicate data handling requirements and comply with information governance policies. Dashboard themes control visual appearance, not data sensitivity.",
    category: "Security & Admin",
    tags: ["data classification", "sensitivity", "dashboard", "governance", "labels"]
  },
  {
    id: 197,
    question: "You have a Power BI dashboard that contains tiles pinned from multiple reports.<br><br>A manager asks you to email a snapshot of the dashboard every Monday morning.<br><br>What should you configure?",
    options: [
      "A data alert on each tile.",
      "A subscription to the dashboard.",
      "A Power Automate flow that exports the report.",
      "A shared link to the dashboard."
    ],
    correctAnswer: 1,
    explanation: "<strong>A subscription to the dashboard.</strong><br><br>Power BI subscriptions allow you to schedule email deliveries of dashboards and report pages. You can configure the frequency (e.g., weekly on Mondays) and the time of delivery. The email includes a snapshot image of the dashboard along with a link to open it in the Power BI service.<br><br>• Data alerts are threshold-based, not scheduled<br>• Power Automate is more complex than needed for this scenario<br>• A shared link doesn't provide scheduled email delivery",
    category: "Power BI Service",
    tags: ["subscription", "dashboard", "email", "schedule", "weekly"]
  },
  {
    id: 198,
    question: "<img src='images/q198-exhibit-1.jpg' alt='Question 198 Exhibit - Original Dashboard' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a dashboard that contains tiles pinned from a single report as shown in the Original Dashboard exhibit above.<br><br>You need to modify the dashboard to appear as shown in the Modified Dashboard exhibit below:<br><br><img src='images/q198-exhibit-2.jpg' alt='Question 198 Exhibit - Modified Dashboard' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>What should you do?",
    options: [
      "Edit the details of each tile.",
      "Change the report theme.",
      "Change the dashboard theme.",
      "Create a custom CSS file."
    ],
    correctAnswer: 2,
    explanation: "<strong>Change the dashboard theme.</strong><br><br>Dashboard themes allow you to apply a consistent color scheme across all tiles on a dashboard without modifying the underlying report. This is ideal when the tiles come from a single report but you want the dashboard to have a different visual appearance.<br><br>• Editing tile details only changes title/subtitle, not the visual styling<br>• Changing the report theme would affect the report itself, not just the dashboard<br>• Custom CSS is not supported for Power BI dashboards<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-dashboard-themes' target='_blank'>Dashboard themes</a>",
    category: "Power BI Service",
    tags: ["dashboard theme", "tiles", "color scheme", "appearance", "styling"]
  },
  {
    id: 199,
    question: "Which of the following is <strong>not</strong> an option when editing report interactions?",
    options: [
      "Filter",
      "Highlight",
      "None",
      "Drill through"
    ],
    correctAnswer: 3,
    explanation: "<strong>Drill through</strong> is not a report interaction option.<br><br>When editing visual interactions, the three available options are:<br>• <strong>Filter</strong> — produces a fully filtered chart showing only related data<br>• <strong>Highlight</strong> — highlights the relevant segments while showing all data<br>• <strong>None</strong> — the chart remains unaffected by selections<br><br>Drill through is a separate navigation feature that takes users to a detail page, not an interaction mode.",
    category: "Visualization",
    tags: ["visual interactions", "filter", "highlight", "none", "drill through"]
  },
  {
    id: 200,
    question: "<img src='images/q200-exhibit.png' alt='Question 200 Exhibit - Bar chart with visual interaction applied' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>What type of visual interaction has been applied to the bar chart above?",
    options: [
      "Filter",
      "Highlight",
      "Subfilter",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "<strong>Highlight</strong><br><br>When the interaction mode is set to <strong>Highlight</strong>, the relevant subsegments in the chart are highlighted (shown in a darker shade) based on the selection, while the rest of the data remains visible but dimmed. This is different from <strong>Filter</strong>, which would remove non-related data entirely, and <strong>None</strong>, which would leave the chart unchanged.",
    category: "Visualization",
    tags: ["highlight", "visual interaction", "bar chart", "cross-highlight", "selection"]
  },
  {
    id: 201,
    question: "What allows users to jump to different report pages while simultaneously filtering based on the specific item selected?",
    options: [
      "Drill through filters",
      "Tooltips",
      "R visuals",
      "Page filters"
    ],
    correctAnswer: 0,
    explanation: "<strong>Drill through filters</strong><br><br>Drill through filters allow users to right-click a data point and navigate to a different report page that is automatically filtered based on the specific item selected. This provides a detailed, contextual view without manually applying filters.",
    category: "Power BI Service",
    tags: ["drill through", "filters", "navigation", "report pages", "context"]
  },
  {
    id: 202,
    question: "What do bookmarks accomplish in Power BI?",
    options: [
      "They save a query for use in other reports.",
      "They save a subsegment of your data table as a separate file.",
      "They save a pre-filtered view of your report.",
      "They save your chart as a template."
    ],
    correctAnswer: 2,
    explanation: "<strong>They save a pre-filtered view of your report.</strong><br><br>Bookmarks capture the current state of a report page, including filters, slicers, visual states, and selections. You can then link bookmarks to buttons using action properties to create navigation experiences and pre-filtered views for report consumers.",
    category: "Power BI Service",
    tags: ["bookmarks", "pre-filtered view", "report state", "navigation", "actions"]
  },
  {
    id: 203,
    question: "<img src='images/q203-exhibit.png' alt='Question 203 Exhibit - Map with tooltip' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>What type of visual interaction is shown in the map above?",
    options: [
      "Highlight",
      "Bookmark",
      "Drill through filter",
      "Tooltip"
    ],
    correctAnswer: 3,
    explanation: "<strong>Tooltip</strong><br><br>Tooltips are pop-up information boxes that appear when you hover over a visual. They display additional data context for the specific data point being hovered over. The exhibit shows a tooltip appearing on a map visual, providing extra detail without navigating away from the current page.",
    category: "Visualization",
    tags: ["tooltip", "hover", "map", "visual interaction", "additional data"]
  },
  {
    id: 204,
    question: "Which of the following actions requires you to be signed in to Power BI?",
    options: [
      "Importing custom visuals",
      "Linking bookmarks",
      "Editing report interactions",
      "All of the above"
    ],
    correctAnswer: 0,
    explanation: "<strong>Importing custom visuals</strong><br><br>Importing custom visuals from files, your organization, or the AppSource marketplace requires you to sign in to Power BI. Linking bookmarks and editing report interactions can be done in Power BI Desktop without signing in.",
    category: "Visualization",
    tags: ["custom visuals", "sign in", "import", "AppSource", "authentication"]
  },
  {
    id: 205,
    question: "Which of the following options is part of Power BI's accessibility features?",
    options: [
      "Themes",
      "Layer order",
      "Tab order",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "<strong>All of the above</strong><br><br>Power BI provides several accessibility features:<br>• <strong>Themes</strong> — support high contrast and accessible color schemes<br>• <strong>Layer order</strong> — controls the stacking order of visuals for screen readers<br>• <strong>Tab order</strong> — defines the keyboard navigation sequence for consumers using assistive technologies<br><br>All three help make reports accessible to users with disabilities.",
    category: "Power BI Service",
    tags: ["accessibility", "themes", "layer order", "tab order", "keyboard navigation"]
  },
  {
    id: 206,
    question: "Which of the following objects cannot be pinned as an individual tile to a dashboard?",
    options: [
      "Filled Maps",
      "Tables",
      "Slicers",
      "Bar Charts"
    ],
    correctAnswer: 2,
    explanation: "<strong>Slicers</strong><br><br>Slicers cannot be pinned to a dashboard as individual tiles. To include slicers on a dashboard, you must pin them as part of a <strong>live page</strong> (Pin Live Page). Filled maps, tables, and bar charts can all be pinned individually as dashboard tiles.",
    category: "Visualization",
    tags: ["slicers", "dashboard", "pin tile", "live page", "limitations"]
  },
  {
    id: 207,
    question: "Which of the following is a benefit of pinning a live page?",
    options: [
      "Slicers are imported",
      "Functionality is preserved",
      "Updates to the report are reflected",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "<strong>All of the above</strong><br><br>The <strong>Pin Live Page</strong> option pins an entire report page to a dashboard and provides all of these benefits:<br>• <strong>Slicers are imported</strong> — interactive slicers work on the dashboard<br>• <strong>Functionality is preserved</strong> — visuals remain interactive<br>• <strong>Updates are reflected</strong> — any changes to the underlying report automatically appear on the dashboard tile",
    category: "Visualization",
    tags: ["pin live page", "dashboard", "slicers", "interactive", "updates"]
  },
  {
    id: 208,
    question: "You create a report in the Power BI service that displays the following visualizations:<br>• A KPI that displays the count of customers<br>• A table that displays the count of customers by country<br>• A line chart that displays the count of customers by year<br><br>You need to receive an alert when the total number of customers reaches 10,000.<br><br>What should you do first?",
    options: [
      "Pin the line chart to a dashboard.",
      "Pin the KPI to a dashboard.",
      "Embed the report into a Microsoft SharePoint page.",
      "Pin the report to a dashboard."
    ],
    correctAnswer: 1,
    explanation: "<strong>Pin the KPI to a dashboard.</strong><br><br>Data alerts can only be set on tiles pinned to a dashboard, and only on specific visual types: <strong>gauges</strong>, <strong>KPIs</strong>, and <strong>cards</strong>. Since you need an alert when customers reach 10,000, you must first pin the KPI (which shows customer count) to a dashboard, then configure a data alert on that tile.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts' target='_blank'>Set data alerts</a>",
    category: "Visualization",
    tags: ["data alert", "KPI", "pin to dashboard", "threshold", "notification"]
  },
  {
    id: 209,
    question: "You have a Power BI report published to the Power BI service. Multiple users need to view the report but should only see data relevant to their department.<br><br>What should you implement?",
    options: [
      "Create separate reports for each department.",
      "Implement row-level security (RLS) with dynamic rules.",
      "Create page-level filters for each department.",
      "Use bookmarks to filter by department."
    ],
    correctAnswer: 1,
    explanation: "<strong>Implement row-level security (RLS) with dynamic rules.</strong><br><br>Row-level security (RLS) restricts data access at the row level based on the signed-in user. Dynamic RLS uses <code>USERPRINCIPALNAME()</code> in DAX filter expressions to automatically show users only the data for their department. This is more scalable and secure than creating separate reports or using filters/bookmarks, which users could bypass.",
    category: "Security & Admin",
    tags: ["RLS", "row-level security", "dynamic", "USERPRINCIPALNAME", "department"]
  },
  {
    id: 210,
    question: "You create a report in the Power BI service.<br><br>You plan to provide external users with access to the report by publishing the report to a public blog.<br><br>You need to ensure that the report in the blog post will be updated as the data is refreshed.<br><br>What should you do in the Power BI service?",
    options: [
      "Publish the app workspace to the entire organization. In the blog post, use the URL of the workspace.",
      "Share the report. In the blog post, use the URL of the dashboard.",
      "Publish the report to the web. In the blog post, use the embed code URL.",
      "In the blog post, use the URL of the report."
    ],
    correctAnswer: 2,
    explanation: "<strong>Publish the report to the web. In the blog post, use the embed code URL.</strong><br><br><strong>Publish to web</strong> generates an embed code that can be used in public websites like blogs. After creating the embed code, the report is updated with any data changes. Anyone with the link can view it without authentication.<br><br>Note: After the initial publish, updates to reports or visuals can take approximately one hour before becoming visible.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-publish-to-web' target='_blank'>Publish to web</a>",
    category: "Power BI Service",
    tags: ["Publish to web", "embed code", "public blog", "external users", "sharing"]
  },
  {
    id: 211,
    question: "You have a Power BI workspace that contains several reports and dashboards.<br><br>You need to distribute the content to a large group of users across your organization while providing a curated navigation experience.<br><br>What should you do?",
    options: [
      "Share each report individually with the users.",
      "Publish the workspace as a Power BI app.",
      "Export the reports as PDF files and email them.",
      "Add all users to the workspace with Viewer role."
    ],
    correctAnswer: 1,
    explanation: "<strong>Publish the workspace as a Power BI app.</strong><br><br>Power BI <strong>apps</strong> provide a curated, packaged collection of dashboards and reports designed for distribution to large audiences. Apps offer a clean navigation experience, can be distributed to the entire organization or specific groups, and are easier to manage than sharing individual items or adding many users to a workspace.<br><br>• Sharing individual reports doesn't scale well<br>• PDF exports lose interactivity<br>• Adding many users as Viewers clutters the workspace",
    category: "Power BI Service",
    tags: ["Power BI app", "publish", "distribution", "workspace", "organization"]
  },
  {
    id: 212,
    question: "<img src='images/q212-exhibit.jpg' alt='Question 212 Exhibit - Key influencers visual results' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are using the key influencers visual to identify which factors affect the quantity of items sold in an order.<br><br>You add the following fields to the Explain By field:<br>• Customer Country<br>• Product Category<br>• Supplier Country<br>• Sales Employee<br>• Supplier Name<br>• Product Name<br>• Customer City<br><br>The key influencers visual returns the results shown in the exhibit above.<br><br>What can you identify from the visual?",
    options: [
      "Customers in Austria order 18.8 more units than the average order quantity.",
      "Customers in Boise order 20.37 percent more than the average order quantity.",
      "Product Category positively influences the quantity per order.",
      "Customers in Cork order lower quantities than average."
    ],
    correctAnswer: 0,
    explanation: "<strong>Customers in Austria order 18.8 more units than the average order quantity.</strong><br><br>The key influencers visual displays the average quantity of units, not percentages. Option B is incorrect because 20.37 represents units, not a percentage. The visual shows how much more (or less) each factor contributes compared to the average order quantity.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers' target='_blank'>Key influencers visual</a>",
    category: "Visualization",
    tags: ["key influencers", "AI visual", "factors", "quantity", "analysis"]
  },
  {
    id: 213,
    question: "You are creating a dashboard by using the Power BI service.<br><br>You have an existing report page that contains three charts.<br><br>You need to add the charts to the dashboard while maintaining the interactivity between the charts.<br><br>What should you do?",
    options: [
      "Edit interactions in the report and set all interactions to Filter.",
      "Pin each chart as a tile.",
      "Edit the dashboard theme and pin each chart as a tile.",
      "Pin the report page as a live tile."
    ],
    correctAnswer: 3,
    explanation: "<strong>Pin the report page as a live tile.</strong><br><br>Pinning an entire report page as a <strong>live tile</strong> is an easy way to pin multiple visualizations at once while preserving interactivity. The tiles are live — you can interact with them directly on the dashboard, and changes made to the report are automatically reflected.<br><br>Pinning charts individually as separate tiles does NOT maintain interactivity between them.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-dashboard-pin-live-tile-from-report' target='_blank'>Pin a live tile from a report</a>",
    category: "Power BI Service",
    tags: ["pin live tile", "dashboard", "interactivity", "report page", "live tile"]
  },
  {
    id: 214,
    question: "You need to modify a column chart. The solution must ensure that the total for each bar is shown above the column.<br><br>What should you enable?",
    options: [
      "Data labels",
      "Title",
      "X-axis",
      "Y-axis"
    ],
    correctAnswer: 0,
    explanation: "<strong>Data labels</strong><br><br>Enabling <strong>Data labels</strong> on a column chart displays the numeric value above (or inside) each column. This allows users to see the exact total for each bar without needing to reference the axis. Title, X-axis, and Y-axis settings control labels and formatting for those elements, not the values shown on each column.",
    category: "Visualization",
    tags: ["data labels", "column chart", "total", "visualization", "formatting"]
  },
  {
    id: 215,
    question: "You plan to use a Power BI report visual to display sales values that change over time.<br><br>You need to identify a visualization to use. The solution must clearly illustrate the changes of sales values over time.<br><br>Which visualization type should you identify?",
    options: [
      "Column chart",
      "Doughnut chart",
      "Funnel chart",
      "Pie chart"
    ],
    correctAnswer: 0,
    explanation: "<strong>Column chart</strong><br><br>A column chart is well-suited for displaying values that change over time, with each column representing a time period. The height differences between columns clearly illustrate how sales values increase or decrease.<br><br>• <strong>Doughnut</strong> and <strong>Pie</strong> charts show proportions of a whole, not changes over time<br>• <strong>Funnel</strong> charts show stages in a process, not temporal changes",
    category: "Visualization",
    tags: ["column chart", "over time", "sales", "changes", "visualization"]
  },
  {
    id: 216,
    question: "You have a line chart that shows the salary costs of a company over time.<br><br>You need to see the employee count when you hover over a data point.<br><br>What should you do?",
    options: [
      "Add employee count to the drillthrough field well.",
      "Add employee count to the small multiples field well.",
      "Add employee count to the tooltips field well.",
      "Add employee count to the visual filters."
    ],
    correctAnswer: 2,
    explanation: "<strong>Add employee count to the tooltips field well.</strong><br><br>Adding a field to the <strong>Tooltips</strong> field well displays that value when hovering over a data point. This is the correct way to show additional context (like employee count) on hover without changing the visual's axes or layout.<br><br>• Drillthrough navigates to another page on right-click<br>• Small multiples creates multiple small charts<br>• Visual filters control which data is shown, not hover information",
    category: "Visualization",
    tags: ["tooltips", "field well", "hover", "employee count", "line chart"]
  },
  {
    id: 217,
    question: "You create a new report.<br><br>You need to ensure that users have a good experience when they consume the report on a mobile device.<br><br>What are two ways to achieve the goal? Each correct answer presents a complete solution.",
    options: [
      "Create a mobile report layout in Power BI Desktop and publish the report.",
      "Create a mobile report layout in the Power BI service and save the report.",
      "Navigate to PowerBI.com on a mobile device and test the experience.",
      "Reformat all slicers to have a vertical orientation."
    ],
    correctAnswer: [0, 2],
    multiSelect: true,
    explanation: "<strong>Create a mobile report layout in Power BI Desktop and publish the report</strong> and <strong>Navigate to PowerBI.com on a mobile device and test the experience.</strong><br><br>Power BI Desktop allows you to create optimized <strong>mobile layouts</strong> that rearrange visuals for portrait-oriented mobile screens. After publishing, testing on a mobile device via PowerBI.com ensures the experience works well.<br><br>• Creating a mobile layout in the Power BI service is not supported — it must be done in Desktop<br>• Reformatting slicers to vertical orientation alone does not ensure a good mobile experience",
    category: "Power BI Service",
    tags: ["mobile layout", "mobile device", "Power BI Desktop", "responsive", "publish"]
  },
  {
    id: 218,
    question: "Why are parameters important in Power BI paginated reports?",
    options: [
      "They are required so that Power BI can call the paginated report.",
      "They allow the report developer to control the refresh interval of the report.",
      "They allow the user to control aspects of how the report is rendered when the report is run."
    ],
    correctAnswer: 2,
    explanation: "<strong>They allow the user to control aspects of how the report is rendered when the report is run.</strong><br><br>Parameters in paginated reports let users filter data, change formatting, or control other rendering aspects at runtime. For example, a user can select a date range or department before running the report, and the report renders accordingly.",
    category: "Power BI Service",
    tags: ["paginated reports", "parameters", "runtime", "rendering", "user control"]
  },
  {
    id: 219,
    question: "Power BI paginated reports are created by using which tool?",
    options: [
      "Power BI Report Builder",
      "Power BI Desktop",
      "Power BI Service"
    ],
    correctAnswer: 0,
    explanation: "<strong>Power BI Report Builder</strong><br><br><strong>Power BI Report Builder</strong> is the standalone tool specifically designed for creating paginated reports (.rdl files). Power BI Desktop is used for interactive reports (.pbix), and the Power BI Service is for publishing and consuming reports, not authoring paginated reports.",
    category: "Power BI Service",
    tags: ["paginated reports", "Report Builder", "authoring tool", "rdl"]
  },
  {
    id: 220,
    question: "Power BI paginated reports is an evolved technology that was built from which original tool?",
    options: [
      "SQL Server Analysis Services",
      "Microsoft SharePoint",
      "SQL Server Reporting Services"
    ],
    correctAnswer: 2,
    explanation: "<strong>SQL Server Reporting Services (SSRS)</strong><br><br>Power BI paginated reports evolved from <strong>SQL Server Reporting Services (SSRS)</strong>. They use the same .rdl report definition format and share many of the same capabilities, including pixel-perfect formatting, multi-page layouts, and precise print control. The technology was adapted for the Power BI cloud platform.",
    category: "Power BI Service",
    tags: ["paginated reports", "SSRS", "SQL Server Reporting Services", "evolution", "rdl"]
  },
  {
    id: 221,
    question: "You use an R visual to produce a map of 500,000 customers. You include the values of CustomerID, Latitude, and Longitude in the fields sent to the visual. Each customer ID is unique.<br><br>In powerbi.com, when users load the visual, they only see some of the customers.<br><br>What is the cause of the issue?",
    options: [
      "The visual was built by using a different version of R.",
      "The data comes from a Microsoft SQL Server source.",
      "The data is deduplicated.",
      "Too many records were sent to the visual."
    ],
    correctAnswer: 3,
    explanation: "<strong>Too many records were sent to the visual.</strong><br><br>R visuals in the Power BI service have data size limitations:<br>• Data used for plotting is limited to <strong>150,000 rows</strong>. If more than 150,000 rows are selected, only the top 150,000 rows are used and a message is displayed.<br>• Input data has a limit of 250 MB.<br><br>With 500,000 customers, only the top 150,000 will be displayed.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/service-r-visuals' target='_blank'>R visuals in the Power BI service</a>",
    category: "Visualization",
    tags: ["R visual", "limitation", "150000 rows", "data size", "Power BI service"]
  },
  {
    id: 222,
    question: "You have a report that contains four pages. Each page contains slicers for the same four fields.<br><br>Users report that when they select values in a slicer on one page, the selections are not persisted on other pages.<br><br>You need to recommend a solution to ensure that users can select a value once to filter the results on all the pages.<br><br>What are two possible recommendations to achieve this goal?",
    options: [
      "Replace the slicers with report-level filters.",
      "Sync the slicers across the pages.",
      "Create a bookmark for each slicer value.",
      "Replace the slicers with page-level filters.",
      "Replace the slicers with visual-level filters."
    ],
    correctAnswer: [0, 1],
    multiSelect: true,
    explanation: "<strong>Replace the slicers with report-level filters</strong> and <strong>Sync the slicers across the pages.</strong><br><br><strong>A (Report-level filters):</strong> A report-level filter applies to all visuals on all pages in the report, ensuring consistent filtering across pages.<br><br><strong>B (Sync slicers):</strong> You can sync a slicer across any or all pages in a report using the Sync slicers pane (View menu → Sync slicers). This ensures slicer selections persist across pages.<br><br>• Page-level and visual-level filters only apply to a single page or visual<br>• Bookmarks would require creating one per value combination, which is impractical<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/create-reports/power-bi-report-add-filter' target='_blank'>Add a report filter</a><br><a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers' target='_blank'>Slicers in Power BI</a>",
    category: "Visualization",
    tags: ["sync slicers", "report-level filter", "cross-page", "filter persistence", "slicers"]
  },
  {
    id: 223,
    question: "You are developing a report page. Some users will navigate the report by using a keyboard, and some users will consume the report by using a screen reader.<br><br>You need to ensure that the users can consume the content on a report page in a logical order.<br><br>What should you configure in Microsoft Power BI Desktop?",
    options: [
      "The tab order",
      "The layer order",
      "The bookmark order",
      "The X position"
    ],
    correctAnswer: 0,
    explanation: "<strong>The tab order</strong><br><br>The <strong>tab order</strong> defines the sequence in which keyboard and screen reader users navigate through objects and visuals on a report page. Report authors can set the tab order to ensure content is consumed in a logical order. If a user cannot tab through a report logically, the report author should adjust the tab order.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-consuming-tools' target='_blank'>Accessibility consuming tools</a>",
    category: "Power BI Service",
    tags: ["tab order", "accessibility", "keyboard", "screen reader", "logical order"]
  },
  {
    id: 224,
    question: "You need to create a sales report in Power BI that meets the following requirements:<br>• Must display data in tables with headers and footers<br>• Must print all data in the report<br>• Must allow users to select a region value in the parameters<br><br>What should you do?",
    options: [
      "Create a paginated report with a table.",
      "Create a scorecard.",
      "Create an interactive report with a matrix.",
      "Create an interactive report with a table."
    ],
    correctAnswer: 0,
    explanation: "<strong>Create a paginated report with a table.</strong><br><br>Paginated reports are designed for printing and support:<br>• Tables with <strong>headers and footers</strong> that repeat on every page<br>• <strong>Printing all data</strong> — paginated reports render every row across multiple pages<br>• <strong>Parameters</strong> — users can select values (like region) before running the report<br><br>Interactive reports in Power BI Desktop do not support headers/footers or guaranteed full-data printing.",
    category: "Power BI Service",
    tags: ["paginated report", "headers", "footers", "parameters", "printing"]
  },
  {
    id: 225,
    question: "Where are time series charts located?",
    options: [
      "The filter pane is where all filters on visuals and pages are located.",
      "The fields pane is where all charts are located.",
      "Time series charts can be imported from AppSource."
    ],
    correctAnswer: 2,
    explanation: "<strong>Time series charts can be imported from AppSource.</strong><br><br>Specialized time series chart visuals are available as custom visuals from <strong>AppSource</strong>. While Power BI has built-in line charts that can display time-based data, dedicated time series visuals with advanced features (like forecasting, anomaly detection, etc.) can be imported from the AppSource marketplace.",
    category: "Visualization",
    tags: ["time series", "AppSource", "custom visual", "import", "chart"]
  },
  {
    id: 226,
    question: "What visual should be used to display outliers?",
    options: [
      "The line chart is best-suited to display outliers.",
      "The clustered column chart is best-suited to display outliers.",
      "The scatter chart displays outliers."
    ],
    correctAnswer: 2,
    explanation: "<strong>The scatter chart displays outliers.</strong><br><br>Scatter charts are the best visualization for identifying outliers because they plot individual data points across two numeric axes. Points that fall far from the main cluster of data are easily identifiable as outliers. Scatter charts also support the built-in clustering feature which further helps distinguish outliers from normal data patterns.",
    category: "Visualization",
    tags: ["scatter chart", "outliers", "data points", "visualization", "analysis"]
  },
  {
    id: 227,
    question: "What does the AI splits feature do?",
    options: [
      "AI splits work by considering all available fields and determining which one to drill into to get the highest/lowest value of the measure that is being analyzed.",
      "AI splits work by considering all available fields and determining which one to drill into and will only return the highest or lowest value within your dataset.",
      "AI splits only display the difference between highest and lowest value of the measure that is being analyzed."
    ],
    correctAnswer: 0,
    explanation: "<strong>AI splits work by considering all available fields and determining which one to drill into to get the highest/lowest value of the measure that is being analyzed.</strong><br><br>In the Decomposition Tree visual, <strong>AI splits</strong> automatically analyze all available dimensions and determine which field to expand next to find the highest or lowest value of the selected measure. This enables automated root cause analysis without manually choosing which dimension to drill into.",
    category: "Power BI Service",
    tags: ["AI splits", "decomposition tree", "highest", "lowest", "measure", "drill"]
  },
  {
    id: 228,
    question: "Can you access the Q&A feature by using buttons?",
    options: [
      "Yes, you can, but you will need to add the Q&A visual to your reporting canvas and then link your button with the visual that you have added.",
      "Yes, you can access the Q&A feature by selecting the Q&A button type.",
      "No, to use the Q&A feature, you will need to add the Q&A visual to your reporting canvas."
    ],
    correctAnswer: 1,
    explanation: "<strong>Yes, you can access the Q&A feature by selecting the Q&A button type.</strong><br><br>Power BI provides a dedicated <strong>Q&A button type</strong> that you can add to your report. When users click this button, it opens the Q&A dialog where they can type natural language questions. You do not need to add a separate Q&A visual to the canvas first.",
    category: "Power BI Service",
    tags: ["Q&A", "button", "button type", "natural language", "navigation"]
  },
  {
    id: 229,
    question: "What is <strong>not</strong> a feature of the Q&A feature?",
    options: [
      "Searching for help topics about Power BI.",
      "Adding new synonyms to fields through Q&A tooling.",
      "Converting a Q&A answer into a visual inside your report."
    ],
    correctAnswer: 0,
    explanation: "<strong>Searching for help topics about Power BI</strong> is NOT a feature of Q&A.<br><br>The Q&A feature is designed to answer questions about <em>your data</em>, not to provide help documentation about Power BI itself. Q&A does support:<br>• Adding synonyms to fields through Q&A tooling<br>• Converting Q&A answers into standard visuals in your report",
    category: "Visualization",
    tags: ["Q&A", "limitations", "synonyms", "visual conversion", "data questions"]
  },
  {
    id: 230,
    question: "What does the decomposition tree <strong>not</strong> enable you to do?",
    options: [
      "Conduct root cause analysis to understand a measure better.",
      "Conduct what-if analysis with built-in parameters.",
      "Automatically analyze selected dimensions to find where a measure is highest or lowest."
    ],
    correctAnswer: 1,
    explanation: "<strong>Conduct what-if analysis with built-in parameters</strong> is NOT a feature of the decomposition tree.<br><br>The decomposition tree enables:<br>• <strong>Root cause analysis</strong> — breaking down a measure across dimensions to find causes<br>• <strong>AI splits</strong> — automatically finding where a measure is highest or lowest<br><br>What-if analysis with parameters is a separate Power BI feature (New Parameter) and is not part of the decomposition tree visual.",
    category: "Power BI Service",
    tags: ["decomposition tree", "what-if", "root cause", "AI splits", "limitations"]
  },
  {
    id: 231,
    question: "<img src='images/q231-exhibit-1.jpg' alt='Question 231 Exhibit - Key influencers visual' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a table that contains the following three columns:<br>• City<br>• Total Sales<br>• Occupation<br><br>You need to create a key influencers visualization as shown in the exhibit above.<br><br><img src='images/q231-exhibit-2.png' alt='Question 231 Exhibit - Field configuration' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>How should you configure the visualization fields?",
    options: [
      "Analyze: Total Sales | Explain by: Occupation | Expand by: City",
      "Analyze: Occupation | Explain by: City | Expand by: Total Sales",
      "Analyze: City | Explain by: Total Sales | Expand by: Occupation",
      "Analyze: Total Sales | Explain by: City | Expand by: Occupation"
    ],
    correctAnswer: 0,
    explanation: "<strong>Analyze: Total Sales | Explain by: Occupation | Expand by: City</strong><br><br>In the Key Influencers visual:<br>• <strong>Analyze</strong> — the metric you want to understand (Total Sales)<br>• <strong>Explain by</strong> — the fields that may influence the metric (Occupation)<br>• <strong>Expand by</strong> — adds fields for setting the level of analysis without looking for new influencers (City)<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers' target='_blank'>Key influencers visual</a>",
    category: "Power BI Service",
    tags: ["key influencers", "Analyze", "Explain by", "Expand by", "configuration"]
  },
  {
    id: 232,
    question: "<img src='images/q232-exhibit.png' alt='Question 232 Exhibit - Dataset with cities and sales profit' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have the dataset shown in the exhibit above.<br><br>You need to ensure that the visual shows only the 10 cities that have the highest sales profit.<br><br>What should you do?",
    options: [
      "Add a Top N filter to the visual.",
      "Configure the Sales Profit measure to use the RANKX function.",
      "Add a calculated column to the table that uses the TOPN function. In the visual, replace Sales Profit with the calculated column.",
      "Add a calculated column to the table that returns the city name if the city is in the top 10, otherwise the calculated column will return \"Not in Top 10\". In the visual, replace Sales Profit with the calculated column."
    ],
    correctAnswer: 0,
    explanation: "<strong>Add a Top N filter to the visual.</strong><br><br>Power BI <strong>Top N filters</strong> are the simplest way to display the top performing records. To configure:<br>1. Select the column you want to filter (City)<br>2. Change the Filter Type to <strong>Top N</strong><br>3. Set the number to 10<br>4. Drag Sales Profit to the \"By Value\" field<br><br>Using RANKX alone (option B) would rank but not filter. TOPN in a calculated column (option C) is unnecessarily complex.<br><br>Reference: <a href='https://www.tutorialgateway.org/power-bi-top-10-filters/' target='_blank'>Power BI Top 10 Filters</a>",
    category: "Visualization",
    tags: ["Top N", "filter", "top 10", "cities", "sales profit", "visual filter"]
  },
  {
    id: 233,
    question: "<img src='images/q233-exhibit-1.png' alt='Question 233 Exhibit - Report page with visuals and interaction icons' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a report page that contains the visuals shown in the exhibit above.<br><br><img src='images/q233-exhibit-2.png' alt='Question 233 Exhibit - Drop-down answer choices' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
    options: [
      "Statement 1: not affect | Statement 2: cross-filter",
      "Statement 1: cross-filter | Statement 2: not affect",
      "Statement 1: highlight | Statement 2: filter",
      "Statement 1: filter | Statement 2: highlight"
    ],
    correctAnswer: 0,
    explanation: "<strong>Statement 1: not affect</strong><br><strong>Statement 2: cross-filter</strong><br><br>The visual interaction icons shown in the exhibit indicate:<br>• The first visual is set to <strong>None</strong> (circle with line through it), meaning selecting data in the source visual will <strong>not affect</strong> it<br>• The second visual is set to <strong>Filter</strong> (funnel icon), meaning selecting data in the source visual will <strong>cross-filter</strong> it, showing only the related data<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/consumer/end-user-interactions' target='_blank'>Visual interactions</a>",
    category: "Visualization",
    tags: ["visual interactions", "cross-filter", "not affect", "none", "filter icon"]
  },
  {
    id: 234,
    question: "<img src='images/q234-exhibit.jpg' alt='Question 234 Exhibit - Chart with dashed horizontal percentile line' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You plan to create the chart shown in the exhibit above.<br><br>How should you create the dashed horizontal line denoting the 40th percentile of daily sales for the period shown?",
    options: [
      "Add a measure to the visual that uses the following DAX expression: Measure1 = PERCENTILEX.INC(Sales, Sales[Total Sales], 0.40)",
      "Add a new percentile line that uses Total Sales as the measure and 40% as the percentile.",
      "Create a horizontal line that has a fixed value of 24,000.",
      "Add a measure to the visual that uses the following DAX expression: Measure1 = PERCENTILEX.EXC(Sales, Sales[Total Sales], 0.40)"
    ],
    correctAnswer: 1,
    explanation: "<strong>Add a new percentile line that uses Total Sales as the measure and 40% as the percentile.</strong><br><br>The <strong>Analytics pane</strong> in Power BI enables you to add percentile lines to visuals:<br>1. Click the Analytics tab<br>2. Select <strong>Percentile Line</strong><br>3. Choose the measure (Total Sales) and set the percentile (40%)<br>4. Format as dashed line<br><br>This is simpler than creating DAX measures. PERCENTILEX.INC and PERCENTILEX.EXC are DAX functions that calculate percentiles but would need additional configuration to display as a line.<br><br>Reference: <a href='https://dash-intel.com/powerbi/statistical_functions_percentile.php' target='_blank'>Percentile functions</a>",
    category: "Power BI Service",
    tags: ["percentile line", "analytics pane", "40th percentile", "Total Sales", "dashed line"]
  },
  {
    id: 235,
    question: "<img src='images/q235-exhibit-1.png' alt='Question 235 Exhibit - Table visual with indicator colors' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to create a visual as shown in the exhibit above. The indicator color for Total Sales will be based on % Growth to Last Year. The solution must use the existing calculations only.<br><br><img src='images/q235-exhibit-2.jpg' alt='Question 235 Exhibit - Answer dropdowns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>How should you configure the visual?<br><br><strong>Conditional formatting:</strong> [Select one]<br><strong>Format by:</strong> [Select one]",
    options: [
      "Conditional formatting: Background color | Format by: Rules",
      "Conditional formatting: Font color | Format by: Color scale",
      "Conditional formatting: Data bars | Format by: Field value",
      "Conditional formatting: Icons | Format by: Rules",
      "Conditional formatting: Web URL | Format by: Color scale"
    ],
    correctAnswer: 0,
    explanation: "<strong>Conditional formatting: Background color</strong><br><strong>Format by: Rules</strong><br><br>The exhibit shows cells with colored backgrounds as indicators for Total Sales based on % Growth to Last Year.<br><br>• <strong>Background color</strong> — the indicator is applied as a cell background, matching the exhibit<br>• <strong>Rules</strong> — since the solution must use existing calculations (the % Growth to Last Year measure), Rules lets you define color thresholds based on that measure without creating additional columns<br><br>Field value would require a column containing color names in the data model.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting' target='_blank'>Conditional table formatting</a>",
    category: "Power BI Service",
    tags: ["conditional formatting", "background color", "rules", "indicator", "Growth"]
  },
  {
    id: 236,
    question: "<img src='images/q236-exhibit-1.jpg' alt='Question 236 Exhibit - Power BI data model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have the Power BI data model shown in the exhibit above.<br><br><img src='images/q236-exhibit-2.png' alt='Question 236 Exhibit - Answer dropdowns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Complete the statements:<br><br><strong>Statement 1:</strong> When a table visual is added to a blank report page and populated by using the StoreID field from the Sales table, a [answer choice] is displayed.<br><br><strong>Statement 2:</strong> Adding a page filter of Sales[StoreID] = 1 will filter the values displayed on the page from [answer choice].",
    options: [
      "Statement 1: distinct count of the StoreID values | Statement 2: only the Sales table",
      "Statement 1: list of all the StoreID values | Statement 2: only the Store table",
      "Statement 1: sum of the StoreID values | Statement 2: the Sales table and the Customer table",
      "Statement 1: list of the distinct StoreID values | Statement 2: all the tables related to the Sales table"
    ],
    correctAnswer: 3,
    explanation: "<strong>Statement 1: list of the distinct StoreID values</strong><br><strong>Statement 2: all the tables related to the Sales table</strong><br><br><strong>Statement 1:</strong> When you add a non-numeric or ID field to a table visual, Power BI displays a <strong>list of the distinct values</strong> by default (not a count or sum). StoreID as a dimension shows each unique value.<br><br><strong>Statement 2:</strong> A page filter on Sales[StoreID] = 1 filters the Sales table, and due to relationships in the data model, it also filters <strong>all related tables</strong> through cross-filtering. This means dimensions connected to Sales are also filtered.",
    category: "Data Modeling",
    tags: ["data model", "StoreID", "distinct values", "page filter", "cross-filter", "relationships"]
  },
  {
    id: 237,
    question: "What is the row limit when creating R visuals?",
    options: [
      "100,000 rows",
      "150,000 rows",
      "500,000 rows",
      "1,000,000 rows"
    ],
    correctAnswer: 1,
    explanation: "<strong>150,000 rows</strong><br><br>R visuals in Power BI are limited to <strong>150,000 rows</strong>. If more than 150,000 rows are selected, only the top 150,000 rows are used and a warning message is displayed. Additionally, the input data has a limit of 250 MB.",
    category: "Power BI Service",
    tags: ["R visual", "row limit", "150000", "limitation", "data size"]
  },
  {
    id: 238,
    question: "You use Power BI Desktop to create a visualization for a Microsoft SQL Server data source.<br><br>You need to ensure that you can use R visualization.<br><br>Which two actions should you perform?",
    options: [
      "Download and install Microsoft R Server.",
      "Download and install RStudio Server on the computer that has Power BI Desktop installed.",
      "Install SQL Server R Services on the server that runs SQL Server.",
      "Enable R Scripting on the computer that has Power BI Desktop installed.",
      "Download and install Microsoft R on the computer that has Power BI Desktop installed."
    ],
    correctAnswer: [3, 4],
    multiSelect: true,
    explanation: "<strong>Enable R Scripting</strong> and <strong>Download and install Microsoft R</strong> on the computer with Power BI Desktop.<br><br>To use R visuals in Power BI Desktop, you need to:<br>1. <strong>Download and install R</strong> (Microsoft R or another R distribution) on the local machine<br>2. <strong>Enable R Scripting</strong> by specifying the local R installation path in the R Scripting section of the Options dialog box<br><br>You don't need R Server, RStudio Server, or SQL Server R Services — these are server-side components not required for local R visuals.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/desktop-r-visuals' target='_blank'>R visuals in Power BI Desktop</a>",
    category: "Visualization",
    tags: ["R visual", "R scripting", "install R", "Power BI Desktop", "configuration"]
  },
  {
    id: 239,
    question: "You need to use Performance Analyzer in Power BI Desktop to review the performance of report elements.<br><br>Which two tasks should you perform before you start the recording from Performance Analyzer?",
    options: [
      "Clear the visual cache.",
      "Clear the data engine cache.",
      "Open the Selection pane.",
      "Refresh the dataset."
    ],
    correctAnswer: [0, 1],
    multiSelect: true,
    explanation: "<strong>Clear the visual cache</strong> and <strong>Clear the data engine cache.</strong><br><br>Before starting a Performance Analyzer recording, you should clear both caches to get accurate results:<br>• <strong>Visual cache</strong> — stores previously rendered visual results; clearing it forces visuals to re-render<br>• <strong>Data engine cache</strong> — stores previously fetched query results; clearing it forces fresh queries to the data model<br><br>Without clearing these caches, Performance Analyzer may show artificially fast times because it retrieves cached results instead of executing fresh queries and renders.",
    category: "Visualization",
    tags: ["Performance Analyzer", "visual cache", "data engine cache", "recording", "optimization"]
  },
  {
    id: 240,
    question: "How does the admin workspace role differ from other types of workspace roles?",
    options: [
      "Admin is the only role that can publish or update apps.",
      "Admins are the only role that can remove users.",
      "Admin is the only role that can create, edit, or delete content in a workspace.",
      "Admin is the only role that can publish content to a workspace."
    ],
    correctAnswer: 1,
    explanation: "<strong>Admins are the only role that can remove users.</strong><br><br>While Contributors and Members can also create, edit, and publish content, only <strong>Admins</strong> have the ability to:<br>• Add or remove users from the workspace<br>• Update workspace settings<br>• Manage permissions<br><br>Publishing/updating apps can be done by Admins and Members. Creating and editing content can be done by Admins, Members, and Contributors.",
    category: "Security & Admin",
    tags: ["workspace roles", "admin", "remove users", "permissions", "workspace"]
  },
  {
    id: 241,
    question: "What is the best description of a workspace?",
    options: [
      "A workspace is a feature in Power BI service that allows you to view reports only.",
      "A workspace is a feature that allows you to view and edit the data model, build visualizations, and transform the data.",
      "A workspace is a feature of Power BI Desktop that allows you to build reports only.",
      "A workspace is a centralized location or repository that allows you to collaborate with colleagues and teams to create collections of reports, dashboards, etc."
    ],
    correctAnswer: 3,
    explanation: "<strong>A workspace is a centralized location or repository that allows you to collaborate with colleagues and teams to create collections of reports, dashboards, etc.</strong><br><br>Workspaces in the Power BI service are collaborative environments where teams can create, share, and manage collections of dashboards, reports, datasets, and dataflows. They provide role-based access control and serve as the foundation for publishing Power BI apps.",
    category: "Power BI Service",
    tags: ["workspace", "collaboration", "repository", "reports", "dashboards"]
  },
  {
    id: 242,
    question: "You need to share Power BI content with external users who do not have Power BI licenses.<br><br>What should you use?",
    options: [
      "Publish to web",
      "Share the dashboard directly",
      "Add them as workspace members",
      "Create a paginated report"
    ],
    correctAnswer: 0,
    explanation: "<strong>Publish to web</strong><br><br><strong>Publish to web</strong> generates a public embed code that allows anyone to view the report without a Power BI license or authentication. This is the only option that works for external users who don't have Power BI licenses.<br><br>• Sharing dashboards and adding workspace members require the recipient to have a Power BI Pro license<br>• Paginated reports still require authentication to access",
    category: "Power BI Service",
    tags: ["Publish to web", "external users", "no license", "embed", "sharing"]
  },
  {
    id: 243,
    question: "A key tenet of data protection is sensitivity labels, which specifies what?",
    options: [
      "The classification of critical content in Power BI",
      "Access to content in the Power BI service"
    ],
    correctAnswer: 0,
    explanation: "<strong>The classification of critical content in Power BI</strong><br><br>Sensitivity labels classify content according to its sensitivity level (e.g., Confidential, Internal, Public). They do not directly control access — they label and classify content so users understand its sensitivity and handle it appropriately. Access control is managed through workspace roles and permissions.",
    category: "Security & Admin",
    tags: ["sensitivity labels", "classification", "data protection", "critical content"]
  },
  {
    id: 244,
    question: "You have multiple dashboards.<br><br>You need to ensure that when users browse the available dashboards from powerbi.com, they can see which dashboards contain Personally Identifiable Information (PII). The solution must minimize configuration effort and impact on the dashboard design.<br><br>What should you use?",
    options: [
      "Comments",
      "Tiles",
      "Microsoft Information Protection sensitivity labels",
      "Active Directory groups"
    ],
    correctAnswer: 2,
    explanation: "<strong>Microsoft Information Protection sensitivity labels</strong><br><br>Microsoft Information Protection <strong>sensitivity labels</strong> provide a simple way to classify critical content in Power BI without compromising productivity or collaboration. Labels can be applied to datasets, reports, dashboards, and dataflows, making it easy for users to identify which dashboards contain PII with minimal configuration effort.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/admin/service-security-sensitivity-label-overview' target='_blank'>Sensitivity label overview</a>",
    category: "Security & Admin",
    tags: ["sensitivity labels", "PII", "Microsoft Information Protection", "classification", "dashboard"]
  },
  {
    id: 245,
    question: "Your company plans to completely separate development and production assets such as datasets, reports, and dashboards in Microsoft Power BI.<br><br>You need to recommend an application lifecycle strategy. The solution must minimize access to production assets and prevent end users from viewing the development assets.<br><br>What should you recommend?",
    options: [
      "Create production reports in a separate workspace that uses a shared dataset from the development workspace. Grant the end users access to the production workspace.",
      "Create one workspace for development. From the new workspace, publish an app for production.",
      "Create a workspace for development and a workspace for production. From the production workspace, publish an app.",
      "In one workspace, create separate copies of the assets and append DEV to the names of the copied assets. Grant the end users access to the workspace."
    ],
    correctAnswer: 2,
    explanation: "<strong>Create a workspace for development and a workspace for production. From the production workspace, publish an app.</strong><br><br>This approach:<br>• <strong>Separates dev and production</strong> into different workspaces<br>• <strong>Minimizes access to production assets</strong> — end users access the app, not the workspace<br>• <strong>Prevents end users from viewing dev assets</strong> — they have no access to the development workspace<br><br>Reference: <a href='https://visualbi.com/blogs/microsoft/powerbi/application-lifecycle-management-power-bi/' target='_blank'>Application lifecycle management in Power BI</a>",
    category: "Power BI Service",
    tags: ["ALM", "lifecycle", "workspace", "development", "production", "app"]
  },
  {
    id: 246,
    question: "You have a collection of reports for the HR department of your company. The datasets use row-level security (RLS). The company has multiple sales regions that each has an HR manager.<br><br>You need to ensure that the HR managers can interact with the data from their region only. The HR managers must be prevented from changing the layout of the reports.<br><br>How should you provision access to the reports for the HR managers?",
    options: [
      "Publish the reports to a different workspace other than the one hosting the datasets.",
      "Publish the reports in an app and grant the HR managers access permission.",
      "Add the HR managers as members of the existing workspace that hosts the reports and the datasets.",
      "Create a new workspace, copy the datasets and reports, and add the HR managers as members of the workspace."
    ],
    correctAnswer: 1,
    explanation: "<strong>Publish the reports in an app and grant the HR managers access permission.</strong><br><br>Publishing as an app ensures:<br>• <strong>RLS is enforced</strong> — HR managers only see data from their region<br>• <strong>Read-only access</strong> — app consumers cannot change report layouts<br><br>Adding users as workspace members (options C/D) would give them access to edit reports and would bypass RLS restrictions on datasets within the workspace.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/admin/service-admin-rls' target='_blank'>Row-level security</a>",
    category: "Security & Admin",
    tags: ["RLS", "app", "HR", "read-only", "row-level security", "permissions"]
  },
  {
    id: 247,
    question: "You need to provide a user with the ability to add members to a workspace. The solution must use the principle of least privilege.<br><br>Which role should you assign to the user?",
    options: [
      "Viewer",
      "Contributor",
      "Member",
      "Admin"
    ],
    correctAnswer: 2,
    explanation: "<strong>Member</strong><br><br>A <strong>Member</strong> can add other members or users with lower permissions (Contributors, Viewers) to the workspace. While Admin can also add members, the principle of least privilege means you should assign the minimum role needed. Members can add users, but unlike Admins, they cannot remove other Admins or delete the workspace.",
    category: "Security & Admin",
    tags: ["workspace roles", "Member", "least privilege", "add members", "permissions"]
  },
  {
    id: 248,
    question: "Which of the following is <strong>NOT</strong> a benefit of Azure Active Directory security groups?",
    options: [
      "Manage member and computer access to shared resources",
      "Create specific security policies for different groups",
      "Set permissions for one member at a time",
      "Manage user access when people leave and join teams"
    ],
    correctAnswer: 2,
    explanation: "<strong>Set permissions for one member at a time</strong> is NOT a benefit of Azure AD security groups.<br><br>The whole purpose of security groups is to manage permissions for <strong>groups of users</strong> rather than individual users. Benefits include:<br>• Managing access to shared resources for entire groups<br>• Creating specific security policies per group<br>• Simplifying user management when people join or leave teams",
    category: "Security & Admin",
    tags: ["Azure AD", "security groups", "permissions", "group management", "NOT benefit"]
  },
  {
    id: 249,
    question: "What is the best sharing option for organizations?",
    options: [
      "Reports",
      "Dashboards",
      "Apps",
      "Spreadsheets"
    ],
    correctAnswer: 2,
    explanation: "<strong>Apps</strong><br><br>Power BI apps are the best sharing option for organizations because they provide a curated, packaged collection of dashboards and reports. The general guidance is:<br>• <strong>Reports</strong> — best for individuals<br>• <strong>Dashboards</strong> — best for teams<br>• <strong>Apps</strong> — best for organizations (large-scale distribution with clean navigation)",
    category: "Power BI Service",
    tags: ["apps", "sharing", "organization", "distribution", "best practice"]
  },
  {
    id: 250,
    question: "Which of the following is the highest level of permissions when sharing workspaces?",
    options: [
      "Admin",
      "Member",
      "Contributor",
      "Viewer"
    ],
    correctAnswer: 0,
    explanation: "<strong>Admin</strong><br><br>The <strong>Admin</strong> role has the highest level of permissions in a workspace. Admins have all the rights of Viewers, Contributors, and Members, plus:<br>• Update and delete the workspace<br>• Add or remove users (including other Admins)<br>• Manage workspace settings<br><br>Permission hierarchy: Admin > Member > Contributor > Viewer",
    category: "Security & Admin",
    tags: ["Admin", "workspace roles", "highest permissions", "hierarchy", "permissions"]
  },
  {
    id: 251,
    question: "<img src='images/q251-exhibit.png' alt='Question 251 Exhibit - Visualization configuration table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You plan to embed multiple visualizations in a public website.<br><br>Your Power BI infrastructure contains the visualizations configured as shown in the table above.<br><br>Which two visualizations can you embed into the website? Each correct answer presents a complete solution.",
    options: [
      "Visual 1",
      "Visual 2",
      "Visual 3",
      "Visual 4",
      "Visual 5"
    ],
    correctAnswer: [1, 3],
    multiSelect: true,
    explanation: "<strong>Visual 2 and Visual 4</strong><br><br>Not all reports can be published to the web. Unsupported scenarios include:<br>• Reports with <strong>row-level security (RLS)</strong> — excludes Visual 1<br>• Reports <strong>shared with you</strong> (not owned) — excludes Visual 3<br>• Reports connecting to <strong>on-premises Analysis Services Tabular</strong> — excludes Visual 5<br>• R visuals<br><br>Visual 2 and Visual 4 don't have these restrictions and can be published to the web.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-publish-to-web' target='_blank'>Publish to web limitations</a>",
    category: "Security & Admin",
    tags: ["Publish to web", "embed", "public website", "RLS", "limitations"]
  },
  {
    id: 252,
    question: "You have an app workspace named Retail Store Analysis in the Power BI service.<br><br>You need to manage the members that have access to the app workspace using the least amount of administrative effort.<br><br>What should you do?",
    options: [
      "From the Office 365 Admin center, click Users.",
      "From the Power BI Admin portal, click Tenant settings.",
      "From the Power BI Admin portal, click Usage metrics.",
      "From the Office 365 Admin center, click Groups."
    ],
    correctAnswer: 3,
    explanation: "<strong>From the Office 365 Admin center, click Groups.</strong><br><br>App workspaces in Power BI are backed by Office 365 Groups. Managing members through the <strong>Office 365 Admin center > Groups</strong> provides the least administrative effort as you can manage group membership centrally, and changes automatically reflect in the Power BI workspace.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-manage-app-workspace-in-power-bi-and-office-365' target='_blank'>Manage app workspace in Power BI and Office 365</a>",
    category: "Security & Admin",
    tags: ["Office 365", "Groups", "workspace", "members", "admin center"]
  },
  {
    id: 253,
    question: "<img src='images/q253-exhibit.jpeg' alt='Question 253 Exhibit - Power BI access error message' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Your organization has a Microsoft Office 365 subscription.<br><br>When the users attempt to access the Power BI Service, they receive the error message shown in the exhibit above.<br><br>You need to ensure that all the users can access the Power BI service.<br><br>What should you do first?",
    options: [
      "From the properties of each dashboard, modify the Share dashboard settings.",
      "From Microsoft Azure PowerShell, run the Set-MsolDomain cmdlet.",
      "Instruct each user to install Microsoft Office 2016.",
      "From Microsoft Azure PowerShell, run the Set-MsolCompanySettings cmdlet.",
      "From Power BI Admin portal, modify the Tenant settings.",
      "From the Microsoft Azure Active Directory admin center, assign a Power BI (free) license to each user.",
      "From the Power BI Admin portal, modify the Privacy Settings."
    ],
    correctAnswer: 3,
    explanation: "<strong>From Microsoft Azure PowerShell, run the Set-MsolCompanySettings cmdlet.</strong><br><br>The <code>Set-MsolCompanySettings</code> cmdlet is used to set company-level configuration settings, including enabling or disabling user self-service sign-up for Power BI. When users see this error, it typically means the tenant-level setting preventing ad-hoc subscriptions needs to be changed via this cmdlet.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/powershell/module/msonline/set-msolcompanysettings?view=azureadps-1.0' target='_blank'>Set-MsolCompanySettings</a>",
    category: "Security & Admin",
    tags: ["Set-MsolCompanySettings", "Azure PowerShell", "tenant", "access error", "license"]
  },
  {
    id: 254,
    question: "<img src='images/q254-exhibit.png' alt='Question 254 Exhibit - License requirements table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Your company plans to use Power BI for 20 users in the sales department. The users will perform the following tasks:<br>• Access a published Power BI app<br>• Modify reports in an app workspace<br>• Share dashboards created in My Workspace<br><br>You need to identify which Power BI licenses are required for the tasks. The solution must use the Power BI (free) license whenever possible.<br><br>Which license should you identify for each task?",
    options: [
      "Access app: Free | Modify reports: Pro | Share dashboards: Pro",
      "Access app: Pro | Modify reports: Pro | Share dashboards: Free",
      "Access app: Free | Modify reports: Free | Share dashboards: Pro",
      "Access app: Pro | Modify reports: Pro | Share dashboards: Pro"
    ],
    correctAnswer: 0,
    explanation: "<strong>Access app: Free | Modify reports: Pro | Share dashboards: Pro</strong><br><br>• <strong>Access a published app</strong> — Free license is sufficient to consume published apps (if the workspace has Premium capacity)<br>• <strong>Modify reports in an app workspace</strong> — Requires a <strong>Pro</strong> license to create, edit, and publish content<br>• <strong>Share dashboards from My Workspace</strong> — Requires a <strong>Pro</strong> license, as sharing content requires Pro for both the sharer and recipient<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/service-create-distribute-apps' target='_blank'>Create and distribute apps</a>",
    category: "Power BI Service",
    tags: ["license", "Free", "Pro", "app", "sharing", "workspace"]
  },
  {
    id: 255,
    question: "You have a Microsoft SharePoint Online site named Sales. Your company has 1,000 sales users. All the sales users can access Sales.<br><br>You create a report in an app workspace in the Power BI service. You embed the report into a page on the Sales site by using the Power BI web part.<br><br>You need to ensure that all the sales users can view the report from the Sales site.<br><br>What should you do?",
    options: [
      "Configure the Portal Site Connection for the Sales site.",
      "Enable anonymous access for the Sales site.",
      "Configure the app workspace for Premium capacity.",
      "Disable the Embed content in apps setting from the Tenant settings in Power BI."
    ],
    correctAnswer: 2,
    explanation: "<strong>Configure the app workspace for Premium capacity.</strong><br><br>With 1,000 users, Power BI Premium is the most cost-effective solution. Premium licenses capacity rather than individual users — content stored in Premium can be viewed by unlimited users without per-user Pro licenses. The content creators still need Pro licenses, but all 1,000 sales users can view the embedded report without individual licenses.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-embed-report-spo' target='_blank'>Embed report in SharePoint</a>",
    category: "Power BI Service",
    tags: ["Premium capacity", "SharePoint", "embed", "1000 users", "licensing"]
  },
  {
    id: 256,
    question: "You plan to deploy a Power BI app workspace that will be viewed by 10,000 users.<br><br>You need to ensure that dashboard data can be updated every 30 minutes.<br><br>What should you do?",
    options: [
      "Assign each user a Power BI Pro license.",
      "Store the dataset in Microsoft Azure Storage that uses the Premium storage tier.",
      "Create the app workspace by using an account that is assigned a Power BI Pro license.",
      "Configure the app workspace for Premium capacity."
    ],
    correctAnswer: 3,
    explanation: "<strong>Configure the app workspace for Premium capacity.</strong><br><br>Power BI Premium allows up to <strong>48 refreshes per day</strong> (every 30 minutes), while Power BI Pro is limited to only <strong>8 refreshes per day</strong>. Additionally, with 10,000 users, Premium is far more cost-effective since it licenses capacity rather than individual users.<br><br>Reference: <a href='https://docs.microsoft.com/en-gb/power-bi/service-premium-what-is' target='_blank'>What is Power BI Premium</a>",
    category: "Power BI Service",
    tags: ["Premium capacity", "48 refreshes", "30 minutes", "10000 users", "scheduling"]
  },
  {
    id: 257,
    question: "<img src='images/q257-exhibit-1.jpeg' alt='Question 257 Exhibit - Wingtip Sales workspace configuration' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You create an app workspace named Wingtip Sales configured as shown in the exhibit above.<br><br><img src='images/q257-exhibit-2.png' alt='Question 257 Exhibit - Answer dropdowns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Complete the statements:<br><br><strong>Statement 1:</strong> The one task that Austin is permitted to perform, but the other members are not, is [answer choice].<br><br><strong>Statement 2:</strong> To make the content in Wingtip Sales available to users who have the free Power BI license, you must first [answer choice].",
    options: [
      "Statement 1: add other users as members | Statement 2: purchase Power BI Premium",
      "Statement 1: create a new dashboard | Statement 2: add all the users as workspace members",
      "Statement 1: pin a report visualization to a dashboard | Statement 2: change the app workspace from Private to Public",
      "Statement 1: publish a PBIX file | Statement 2: purchase Power BI Premium"
    ],
    correctAnswer: 0,
    explanation: "<strong>Statement 1: add other users as members</strong><br><strong>Statement 2: purchase Power BI Premium</strong><br><br><strong>Statement 1:</strong> Austin (as Admin) has the unique ability to <strong>add other users as members</strong>. Other roles (Member, Contributor, Viewer) cannot add members to the workspace.<br><br><strong>Statement 2:</strong> Free users cannot access app workspaces unless the workspace is backed by <strong>Power BI Premium</strong> capacity. Purchasing Premium allows free-licensed users to consume content in that workspace.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-new-workspaces' target='_blank'>New workspaces</a>",
    category: "Security & Admin",
    tags: ["workspace roles", "Admin", "Premium", "free license", "members"]
  },
  {
    id: 258,
    question: "<img src='images/q258-exhibit-1.jpeg' alt='Question 258 Exhibit - Power BI Admin portal' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You open the Power BI Admin portal as shown in the exhibit above. All the app workspaces use the customer's capacity.<br><br><img src='images/q258-exhibit-2.png' alt='Question 258 Exhibit - Answer dropdowns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Complete the statements:<br><br><strong>Statement 1:</strong> You can scale up the customer's capacity by changing the [answer choice].<br><br><strong>Statement 2:</strong> When designing a custom application that embeds reports from the customer's capacity, the developer [answer choice].",
    options: [
      "Statement 1: pricing tier from the Azure portal | Statement 2: must use the app owns data model",
      "Statement 1: settings of the workspace | Statement 2: must use the user owns data model",
      "Statement 1: subscription from the Office 365 admin center | Statement 2: can use both the user owns data model and the app owns data model",
      "Statement 1: Tenant settings from the Power BI Admin portal | Statement 2: must use the app owns data model"
    ],
    correctAnswer: 0,
    explanation: "<strong>Statement 1: pricing tier from the Azure portal</strong><br><strong>Statement 2: must use the app owns data model</strong><br><br><strong>Statement 1:</strong> Power BI Embedded capacity is managed through Azure. To scale up, you change the <strong>pricing tier from the Azure portal</strong>.<br><br><strong>Statement 2:</strong> There are two embedding models:<br>• <strong>User owns data</strong> — for internal embedding (SharePoint, Teams) where users are logged in with Pro licenses<br>• <strong>App owns data</strong> — for external embedding in custom applications where users don't need Power BI licenses<br><br>Since Power BI Embedded is selected (external custom app), the developer must use the <strong>app owns data</strong> model.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/developer/embedded/embedding' target='_blank'>Embedding overview</a>",
    category: "Power BI Service",
    tags: ["Power BI Embedded", "pricing tier", "Azure portal", "app owns data", "scaling"]
  },
  {
    id: 259,
    question: "You have a Power BI app named App1. The privacy for the App1 app workspace is set to Private.<br><br>A user named User1 reports that App1 does not appear in the My organization AppSource. App1 appears in the My organization AppSource for your account.<br><br>You need to ensure that User1 sees App1 from the My organization AppSource.<br><br>What should you do?",
    options: [
      "From the app workspace, click Update app, configure the Access setting, and then click Update app.",
      "From the app workspace, share the dashboard.",
      "From the app workspace settings, add a member.",
      "From the app workspace, click Update app, configure the Content settings, and then click Update app."
    ],
    correctAnswer: 2,
    explanation: "<strong>From the app workspace settings, add a member.</strong><br><br>All members of a workspace can automatically see the app related to that workspace. Since the workspace is set to Private, User1 needs to be added as a <strong>member</strong> of the workspace to see App1 in the My organization AppSource.<br><br>Note: Some argue option A (Update app → Access) could also work by granting specific user access to the published app. However, adding as a workspace member is the most direct approach for Private workspaces.",
    category: "Power BI Service",
    tags: ["app", "AppSource", "Private workspace", "member", "access"]
  },
  {
    id: 260,
    question: "In the Power BI service, you create an app workspace that contains several dashboards.<br><br>You need to provide a user named user1@contoso.com with the ability to edit and publish dashboards.<br><br>What should you do?",
    options: [
      "Modify the members of the app workspace.",
      "Configure security for the dataset used by the app.",
      "Share the dashboard, and then modify the Access settings of the dashboard.",
      "From the app workspace, click Update app, and then configure the Access settings."
    ],
    correctAnswer: 0,
    explanation: "<strong>Modify the members of the app workspace.</strong><br><br>To give a user the ability to <strong>edit and publish</strong> dashboards, they need to be added as a <strong>Member</strong> or <strong>Contributor</strong> in the workspace. Members and Contributors can create, edit, and delete content in the workspace.<br><br>Sharing a dashboard only provides view access, not edit capabilities. Updating app Access settings controls who can see the published app, not who can edit workspace content.<br><br>References:<br><a href='https://docs.microsoft.com/en-us/power-bi/service-manage-app-workspace-in-power-bi-and-office-365' target='_blank'>Manage app workspace</a>",
    category: "Security & Admin",
    tags: ["workspace members", "edit", "publish", "dashboard", "permissions"]
  },
  {
    id: 261,
    question: "You embed a Power BI report in a Microsoft SharePoint Online page.<br><br>A user named User1 can access the SharePoint Online page, but the Power BI web part displays the following error message: \"This content isn't available.\"<br><br>User1 is unable to view the report. You verify that you can access the SharePoint Online page and that the Power BI report displays as expected.<br><br>You need to ensure that User1 can view the report from SharePoint Online.<br><br>What should you do?",
    options: [
      "Publish the app workspace.",
      "Share the dashboard in the app workspace.",
      "Edit the settings of the Power BI web part.",
      "Modify the members of the app workspace."
    ],
    correctAnswer: 3,
    explanation: "<strong>Modify the members of the app workspace.</strong><br><br>Users need access to <strong>both</strong> the SharePoint Online page and the report in the Power BI app workspace to see the report. Since User1 can access SharePoint but not the report, they need to be added as a member of the Power BI app workspace.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-embed-report-spo' target='_blank'>Embed report in SharePoint Online</a>",
    category: "Power BI Service",
    tags: ["SharePoint Online", "embed", "workspace members", "access", "web part"]
  },
  {
    id: 262,
    question: "Your company has a custom line-of-business application named SalesApp.<br><br>The developers of SalesApp want to push data into the Power BI service to create several visualizations.<br><br>You need to ensure that the developers can push the data from SalesApp to the Power BI service.<br><br>What should you do?",
    options: [
      "Go to portal.azure.com and create a web app.",
      "Go to dev.powerbi.com/apps and register an application.",
      "Go to app.powerbi.com/admin-portal and click Publish to web.",
      "Go to app.powerbi.com and create an app workspace."
    ],
    correctAnswer: 1,
    explanation: "<strong>Go to dev.powerbi.com/apps and register an application.</strong><br><br>To push data from a custom application into the Power BI service, you must first register the application with Azure AD through <strong>dev.powerbi.com/apps</strong>. This provides the application with the necessary authentication credentials and API permissions to interact with the Power BI REST API.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/developer/walkthrough-push-data-register-app-with-azure-ad' target='_blank'>Register app with Azure AD</a>",
    category: "Power BI Service",
    tags: ["register application", "push data", "dev.powerbi.com", "API", "Azure AD"]
  },
  {
    id: 263,
    question: "You need to configure a Power BI workspace to notify non-administrative users when issues occur in the workspace.<br><br>What setting should you configure?",
    options: [
      "Contact list",
      "Dataflow storage",
      "License mode",
      "Workspace OneDrive"
    ],
    correctAnswer: 0,
    explanation: "<strong>Contact list</strong><br><br>The <strong>Contact list</strong> setting in workspace settings specifies which users receive notifications about workspace issues and events. By adding non-administrative users to the contact list, they will be notified when issues occur in the workspace.",
    category: "Security & Admin",
    tags: ["contact list", "notifications", "workspace settings", "issues", "non-admin"]
  },
  {
    id: 264,
    question: "You have a Microsoft Power BI tenant that contains a workspace named Workspace1. Workspace1 contains two semantic models and five reports.<br><br>You have a user named User1.<br><br>You need to grant User1 access to publish reports and add other users with permissions to create reports. The solution must follow the principle of least privilege.<br><br>Which workspace role should you assign to User1?",
    options: [
      "Admin",
      "Contributor",
      "Member",
      "Viewer"
    ],
    correctAnswer: 2,
    explanation: "<strong>Member</strong><br><br>The <strong>Member</strong> role provides the least privilege needed to both <strong>publish reports</strong> and <strong>add other users</strong> with lower permissions. Contributors can publish but cannot add users. Admins have more privileges than needed. Viewers can only consume content.",
    category: "Security & Admin",
    tags: ["Member", "workspace role", "least privilege", "publish", "add users"]
  },
  {
    id: 265,
    question: "What type of parameter provides a look at how different scenarios might play out?",
    options: [
      "What-if",
      "If-then"
    ],
    correctAnswer: 0,
    explanation: "<strong>What-if</strong><br><br><strong>What-if parameters</strong> in Power BI allow users to explore different scenarios by adjusting a slicer that changes variable values in measures and calculations. This enables scenario analysis — for example, what would revenue look like at different price points or growth rates.",
    category: "Data Modeling",
    tags: ["what-if", "parameter", "scenario", "slicer", "analysis"]
  },
  {
    id: 266,
    question: "What benefit does dynamic reports provide to end users?",
    options: [
      "It provides static views of data that can only be manipulated by report developers.",
      "It gives end users more control over the data that is displayed."
    ],
    correctAnswer: 1,
    explanation: "<strong>It gives end users more control over the data that is displayed.</strong><br><br>Dynamic reports allow end users to interact with the data through slicers, filters, drill-down, and other interactive features. This gives users control over which data is displayed and how it is viewed, without needing a report developer to make changes.",
    category: "Power BI Service",
    tags: ["dynamic reports", "end users", "interactivity", "control", "filters"]
  },
  {
    id: 267,
    question: "Where are the dataset-scheduled refreshes configured?",
    options: [
      "Power BI Desktop",
      "Power BI Service",
      "AppSource"
    ],
    correctAnswer: 1,
    explanation: "<strong>Power BI Service</strong><br><br>Dataset-scheduled refreshes are configured in the <strong>Power BI Service</strong> (app.powerbi.com). After publishing a report from Power BI Desktop, you go to the dataset settings in the Power BI Service to configure refresh schedules, data source credentials, and gateway connections.",
    category: "Power BI Service",
    tags: ["scheduled refresh", "Power BI Service", "dataset", "configuration", "refresh"]
  },
  {
    id: 268,
    question: "What reserved parameters configure the start and end of where incremental refresh should occur?",
    options: [
      "RangeStart and RangeEnd",
      "Start and End parameters",
      "StartRange and EndRange"
    ],
    correctAnswer: 0,
    explanation: "<strong>RangeStart and RangeEnd</strong><br><br>Power BI uses two reserved parameters named <strong>RangeStart</strong> and <strong>RangeEnd</strong> (case-sensitive) to define the date/time window for incremental refresh. These parameters must be of type Date/Time and are used in the Power Query filter to specify which rows to load during each refresh cycle.",
    category: "Power BI Service",
    tags: ["incremental refresh", "RangeStart", "RangeEnd", "parameters", "date range"]
  },
  {
    id: 269,
    question: "What is the difference between Promotion and Certification when endorsing a dataset?",
    options: [
      "Promotion is for broad usage while Certification needs permission granted on the Admin Tenant settings.",
      "Promotion does not need specific permissions while Certification requires permission from the dataset owner to access the dataset."
    ],
    correctAnswer: 0,
    explanation: "<strong>Promotion is for broad usage while Certification needs permission granted on the Admin Tenant settings.</strong><br><br>• <strong>Promotion</strong> — Any dataset owner can promote their dataset to indicate it's ready for broad usage. No special permissions required.<br>• <strong>Certification</strong> — Only users specifically authorized in the <strong>Admin Tenant settings</strong> can certify datasets. Certification indicates the dataset has been reviewed and meets organizational quality standards. The admin must grant certification permissions in the tenant settings.",
    category: "Security & Admin",
    tags: ["endorsement", "promotion", "certification", "tenant settings", "dataset"]
  },
  {
    id: 270,
    question: "You open a query in Power Query Editor.<br><br>You need to identify the percentage of empty values in each column as quickly as possible.<br><br>Which Data Preview option should you select?",
    options: [
      "Show whitespace",
      "Column profile",
      "Column distribution",
      "Column quality"
    ],
    correctAnswer: 3,
    explanation: "<strong>Column quality</strong><br><br><strong>Column quality</strong> shows the percentage of <strong>Valid</strong>, <strong>Error</strong>, and <strong>Empty</strong> values for each column, making it the quickest way to identify empty value percentages.<br><br>• <strong>Column distribution</strong> — shows distinct and unique value counts<br>• <strong>Column profile</strong> — shows detailed statistics for a single selected column<br>• <strong>Show whitespace</strong> — displays whitespace characters in values<br><br>All these options are found under View > Data Preview in Power Query Editor.<br><br>Reference: <a href='https://community.powerbi.com/t5/Community-Blog/Data-Profiling-in-Power-BI-Power-BI-Update-April-2019/ba-p/674555' target='_blank'>Data Profiling in Power BI</a>",
    category: "Power Query",
    tags: ["column quality", "empty values", "data preview", "Power Query Editor", "profiling"]
  },
  {
    id: 271,
    question: "<img src='images/q271-exhibit-1.png' alt='Question 271 Exhibit - Actions and Answer Area for JSON import' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are building a dataset from a JSON file that contains an array of documents.<br><br>You need to import attributes as columns from all the documents in the JSON file. The solution must ensure that date attributes can be used as date hierarchies in Microsoft Power BI reports.<br><br>Which three actions should you perform in sequence?<br><br><img src='images/q271-exhibit-2.png' alt='Question 271 Exhibit - Correct answer sequence' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: Convert the list to a table | Step 2: Expand the columns | Step 3: Set the data types",
      "Step 1: Expand the records | Step 2: Convert the list to a table | Step 3: Set the data types",
      "Step 1: Convert the list to a table | Step 2: Expand the records | Step 3: Add columns that use data type conversions",
      "Step 1: Set the data types | Step 2: Expand the columns | Step 3: Convert the list to a table"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Convert the list to a table</strong><br><strong>Step 2: Expand the columns</strong><br><strong>Step 3: Set the data types</strong><br><br>When importing JSON in Power Query:<br>1. <strong>Convert the list to a table</strong> — JSON arrays are initially loaded as lists; you must convert to a table first<br>2. <strong>Expand the columns</strong> — expand the record/column to get individual attributes as separate columns<br>3. <strong>Set the data types</strong> — ensure date columns are set to Date type so they can be used as date hierarchies<br><br>Reference: <a href='https://www.mssqltips.com/sqlservertip/4621/using-power-bi-with-json-data-sources-and-files/' target='_blank'>Using Power BI with JSON data sources</a>",
    category: "Power Query",
    tags: ["JSON", "import", "convert list", "expand columns", "data types", "Power Query"]
  },
  {
    id: 272,
    question: "Your company has employees in 10 states. The company recently decided to associate each state to one of the following three regions: East, West, and North.<br><br>You have a data model that contains employee information by state. The model does NOT include region information.<br><br>You have a report that shows the employees by state.<br><br>You need to view the employees by region as quickly as possible.<br><br>What should you do?",
    options: [
      "Create a new aggregation that summarizes by employee.",
      "Create a new group on the state column and set the Group type to List.",
      "Create a new group on the state column and set the Group type to Bin.",
      "Create a new aggregation that summarizes by state."
    ],
    correctAnswer: 1,
    explanation: "<strong>Create a new group on the state column and set the Group type to List.</strong><br><br>The <strong>List</strong> group type allows you to manually assign items (states) into custom groups (regions). You select which states belong to East, West, and North. This is the quickest way to add region grouping without modifying the data model.<br><br>The <strong>Bin</strong> group type is for numeric ranges, not string grouping. Aggregations summarize values, not categories.",
    category: "Data Modeling",
    tags: ["grouping", "List", "state", "region", "Group type"]
  },
  {
    id: 273,
    question: "<img src='images/q273-exhibit.png' alt='Question 273 Exhibit - DAX formula with dropdowns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are enhancing a Power BI model that has DAX calculations.<br><br>You need to create a measure that returns the year-to-date total sales from the same date of the previous calendar year.<br><br>Which DAX functions should you use for the two dropdown selections?",
    options: [
      "Dropdown 1: CALCULATE | Dropdown 2: DATESBETWEEN",
      "Dropdown 1: SUM | Dropdown 2: SAMEPERIODLASTYEAR",
      "Dropdown 1: CALCULATE | Dropdown 2: SAMEPERIODLASTYEAR",
      "Dropdown 1: DATESBETWEEN | Dropdown 2: CALCULATE"
    ],
    correctAnswer: 0,
    explanation: "<strong>Dropdown 1: CALCULATE</strong><br><strong>Dropdown 2: DATESBETWEEN</strong><br><br>The measure formula is:<br><code>Sales PYTD = VAR startyear = STARTOFYEAR(PREVIOUSYEAR('Date'[Date]))<br>VAR enddate = LASTDATE(Sales[Date]) - 365<br>RETURN CALCULATE(Sales[Sales], DATESBETWEEN('Calendar'[Date], startyear, enddate))</code><br><br>• <strong>CALCULATE</strong> evaluates an expression in a modified filter context<br>• <strong>DATESBETWEEN</strong> returns dates between startyear and enddate, creating the YTD range for the previous year<br><br>Reference: <a href='https://www.kasperonbi.com/get-the-ytd-of-the-same-period-last-year/' target='_blank'>Get the YTD of the same period last year</a>",
    category: "DAX",
    tags: ["CALCULATE", "DATESBETWEEN", "PYTD", "previous year", "YTD", "DAX"]
  },
  {
    id: 274,
    question: "You have a Power BI tenant.<br><br>You have reports that use financial datasets and are exported as PDF files.<br><br>You need to ensure that the reports are encrypted.<br><br>What should you implement?",
    options: [
      "Dataset certifications",
      "Row-level security (RLS)",
      "Sensitivity labels",
      "Microsoft Intune policies"
    ],
    correctAnswer: 2,
    explanation: "<strong>Sensitivity labels</strong><br><br>Microsoft Information Protection <strong>sensitivity labels</strong> can be applied to datasets, reports, dashboards, and dataflows. When data is exported from Power BI to Excel, PowerPoint, or PDF files, Power BI <strong>automatically applies the sensitivity label</strong> on the exported file and <strong>protects it according to the label's file encryption settings</strong>. This ensures sensitive data remains protected even after export.<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/blog/announcing-power-bi-data-protection-ga-and-introducing-new-capabilities/' target='_blank'>Power BI data protection GA</a>",
    category: "Security & Admin",
    tags: ["sensitivity labels", "encryption", "PDF", "export", "data protection"]
  },
  {
    id: 275,
    question: "You create a report by using Microsoft Power BI Desktop. The report uses data from a Microsoft SQL Server Analysis Services (SSAS) cube located on your company's internal network.<br><br>You plan to publish the report to the Power BI Service.<br><br>What should you implement to ensure that users who consume the report from the Power BI Service have the most up-to-date data from the cube?",
    options: [
      "A subscription",
      "A scheduled refresh of the dataset",
      "An OData feed",
      "An On-premises data gateway"
    ],
    correctAnswer: 3,
    explanation: "<strong>An On-premises data gateway</strong><br><br>When you publish a report with a live connection to an on-premises SSAS cube, an <strong>On-premises data gateway</strong> must be installed and configured. The gateway acts as a bridge between the Power BI Service in the cloud and the on-premises SSAS data source, ensuring users always get the most up-to-date data.<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/gateway/' target='_blank'>Power BI Gateway</a>",
    category: "Power BI Service",
    tags: ["On-premises data gateway", "SSAS", "live connection", "internal network", "bridge"]
  },
  {
    id: 276,
    question: "You publish a Microsoft Power BI dataset to powerbi.com. The dataset appends data from an on-premises Oracle database and an Azure SQL database by using one query.<br><br>You have admin access to the workspace and permission to use an existing On-premises data gateway for which the Oracle data source is already configured.<br><br>You need to ensure that the data is updated every morning. The solution must minimize configuration effort.<br><br>Which two actions should you perform when you configure scheduled refresh?",
    options: [
      "Configure the dataset to use the existing On-premises data gateway.",
      "Deploy an On-premises data gateway in personal mode.",
      "Set the refresh frequency to Daily.",
      "Configure the dataset to use the personal gateway."
    ],
    correctAnswer: [0, 2],
    multiSelect: true,
    explanation: "<strong>Configure the dataset to use the existing On-premises data gateway</strong> and <strong>Set the refresh frequency to Daily.</strong><br><br>Since the Oracle data source is already configured on the existing gateway, you simply:<br>1. <strong>Use the existing gateway</strong> — no need to deploy a new personal gateway<br>2. <strong>Set refresh frequency to Daily</strong> — ensures data is updated every morning<br><br>Deploying a personal gateway would add unnecessary configuration effort.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-data' target='_blank'>Refresh data in Power BI</a>",
    category: "Power BI Service",
    tags: ["scheduled refresh", "On-premises gateway", "Daily", "Oracle", "Azure SQL"]
  },
  {
    id: 277,
    question: "You create a dataset sourced from dozens of flat files in Azure Blob storage. The dataset uses incremental refresh.<br><br>From powerbi.com, you deploy the dataset and several related reports to Microsoft Power BI Premium capacity.<br><br>You discover that the dataset refresh fails after the refresh runs out of resources.<br><br>What is a possible cause of the issue?",
    options: [
      "Query folding is not occurring.",
      "You selected Only refresh complete periods.",
      "The data type of the column used to partition the data changed.",
      "A filter is missing on the report."
    ],
    correctAnswer: 0,
    explanation: "<strong>Query folding is not occurring.</strong><br><br>The Power BI service partitions data based on date range for incremental refresh. The partition filter conditions must be pushed down to the source system — this is called <strong>query folding</strong>. If query folding is not occurring, all data is loaded into memory before filtering, which causes the refresh to run out of resources.<br><br>It is not recommended to use incremental refresh when query folding cannot take place.<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/blog/incremental-refresh-query-folding/' target='_blank'>Incremental refresh and query folding</a>",
    category: "Power BI Service",
    tags: ["query folding", "incremental refresh", "out of resources", "Premium", "flat files"]
  },
  {
    id: 278,
    question: "Which of the following options allows you to keep reports up to date by automatically refreshing datasets based on a frequency and time of day?",
    options: [
      "Incremental refresh",
      "Scheduled refresh",
      "Data gateway",
      "Row level security"
    ],
    correctAnswer: 1,
    explanation: "<strong>Scheduled refresh</strong><br><br><strong>Scheduled refresh</strong> allows you to keep Power BI reports up to date by automatically refreshing datasets based on a given frequency and time of day. You configure the schedule in the Power BI Service dataset settings.<br><br>• Incremental refresh only refreshes changed data, not the scheduling mechanism itself<br>• Data gateway is a bridge to on-premises data, not a scheduling tool<br>• RLS is a security feature, unrelated to refresh",
    category: "Power BI Service",
    tags: ["scheduled refresh", "automatic", "frequency", "time of day", "dataset"]
  },
  {
    id: 279,
    question: "What is the main difference between a static role and a bookmark?",
    options: [
      "Bookmarks filter data out of the model and limit what the audience can access",
      "Roles filter data out of the model and limit what the audience can access",
      "Bookmarks are only available in Power BI Service",
      "Roles are pre-filtered views of a report"
    ],
    correctAnswer: 1,
    explanation: "<strong>Roles filter data out of the model and limit what the audience can access.</strong><br><br>Static roles (RLS) use DAX expressions to <strong>filter data out of the model</strong>, restricting what specific audiences can see. This is a security feature that limits data access.<br><br>Bookmarks, on the other hand, are <strong>pre-filtered views</strong> of a report that save the visual state — but they don't remove data from the model. Users can still access all data through other means. Roles provide actual data security.",
    category: "Security & Admin",
    tags: ["static role", "RLS", "bookmark", "filter", "security", "data access"]
  },
  {
    id: 280,
    question: "Is it possible for a user to be a part of two RLS roles?",
    options: [
      "Yes, the roles will be combined for the user",
      "Yes, but roles will need to access one at a time",
      "Yes, this is known as dynamic row level security",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes, the roles will be combined for the user.</strong><br><br>If a user is assigned to multiple RLS roles, the roles are <strong>combined</strong> (unioned). The user will see data from all roles they belong to. For example, if Role A shows East region data and Role B shows West region data, a user in both roles will see both East and West data.",
    category: "Security & Admin",
    tags: ["RLS", "multiple roles", "combined", "union", "row-level security"]
  },
  {
    id: 281,
    question: "Which of the following is a benefit of incremental refresh?",
    options: [
      "Faster refresh times",
      "More reliable",
      "Reduced resource usage",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "<strong>All of the above.</strong><br><br><strong>Incremental Refresh</strong> is the process of reloading only the part of a dataset that may change over time and adding it to the rest of the dataset that no longer changes. This provides all three benefits:<br>• <strong>Faster refresh times</strong> — only new/changed data is refreshed<br>• <strong>More reliable</strong> — shorter connections to volatile data sources reduce risk of failure<br>• <strong>Reduced resource usage</strong> — less memory and processing needed since only a subset is refreshed",
    category: "Power BI Service",
    tags: ["incremental refresh", "faster refresh", "reliable", "resource usage", "benefits"]
  },
  {
    id: 282,
    question: "If you wanted to implement incremental refresh for your company data, which of the following data sources must be avoided as it doesn't support query folding?",
    options: [
      "Relational Databases",
      "Flat files",
      "SharePoint Lists",
      "Azure Active Directory"
    ],
    correctAnswer: 1,
    explanation: "<strong>Flat files</strong><br><br><strong>Query folding</strong> is the ability for Power Query to generate a single query statement to retrieve and transform source data to improve the efficiency of the Power Query engine. Unfortunately, <strong>flat files do not support query folding</strong>. Relational databases, SharePoint Lists, and Azure AD sources can support query folding, making them suitable for incremental refresh.",
    category: "Power BI Service",
    tags: ["incremental refresh", "query folding", "flat files", "data source", "Power Query"]
  },
  {
    id: 283,
    question: "<img src='images/q283-exhibit.jpeg' alt='Question 283 Exhibit - Actions and Answer Area for dashboard refresh' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a Microsoft Excel workbook that contains two tables.<br><br>From Power BI, you create a dashboard that displays data from the tables.<br><br>You update the tables each day.<br><br>You need to ensure that the visualizations in the dashboard are updated daily.<br><br>Which three actions should you perform in sequence?",
    options: [
      "Step 1: Download and install an on-premises data gateway (personal) | Step 2: Configure the Gateway Connection settings for the dataset | Step 3: Configure the Schedule Refresh settings for the dataset",
      "Step 1: Download and install Power BI Desktop | Step 2: Configure the Gateway Connection settings for the dataset | Step 3: Add subscriptions for the reports",
      "Step 1: Add subscriptions for the reports | Step 2: Download and install an on-premises data gateway (personal) | Step 3: Configure the Schedule Refresh settings for the dataset",
      "Step 1: Download and install Power BI Desktop | Step 2: Download and install an on-premises data gateway (personal) | Step 3: Configure the Schedule Refresh settings for the dataset"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Download and install an on-premises data gateway (Personal Mode)</strong><br><strong>Step 2: Configure the Gateway Connection settings for the dataset</strong><br><strong>Step 3: Configure the Schedule Refresh settings for the dataset</strong><br><br>Since the dashboard was already created in Power BI Service, Power BI Desktop is already installed and report subscriptions are already made. The correct steps are:<br>1. Install a <strong>personal mode gateway</strong> to bridge on-premises Excel data to Power BI Service<br>2. <strong>Configure gateway connections</strong> so the dataset knows which gateway to use<br>3. <strong>Configure scheduled refresh</strong> to update the data daily<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/refresh-scheduled-refresh' target='_blank'>Scheduled refresh in Power BI</a>",
    category: "Power BI Service",
    tags: ["on-premises gateway", "personal mode", "scheduled refresh", "Excel", "dashboard", "daily refresh"]
  },
  {
    id: 284,
    question: "You have a Power BI dashboard that displays different visualizations of company sales.<br><br>You enable Q&A on the dashboard.<br><br>You need to provide users with sample questions that they can ask when using Q&A.<br><br>Which settings should you modify from the Power BI Settings?",
    options: [
      "Subscriptions",
      "Workbooks",
      "Dashboards",
      "Datasets"
    ],
    correctAnswer: 3,
    explanation: "<strong>Datasets</strong><br><br>You modify the <strong>dataset settings</strong> to allow featured questions to show as suggested Q&As. Featured Q&A questions are configured at the dataset level, so they appear on any dashboard that uses that dataset.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-q-and-a-create-featured-questions' target='_blank'>Create featured questions for Power BI Q&A</a>",
    category: "Power BI Service",
    tags: ["Q&A", "featured questions", "dataset", "dashboard", "settings"]
  },
  {
    id: 285,
    question: "A data analyst publishes several Power BI visualizations to a blog.<br><br>You discover that some of the visualizations contain data that is considered private by your company.<br><br>You need to prevent the visualizations from being published to the blog.<br><br>What should you do?",
    options: [
      "From the Power BI Admin portal, disable the Publish to web setting.",
      "From the Power BI settings, delete the embedded codes.",
      "From the Power BI Admin portal, disable the Share content with external users setting.",
      "From the dashboard settings, modify the Share dashboard settings."
    ],
    correctAnswer: 1,
    explanation: "<strong>From the Power BI settings, delete the embedded codes.</strong><br><br>Once you create a <strong>Publish to web</strong> embed code, you can manage your codes from the <strong>Settings</strong> menu in Power BI. Managing embed codes includes the ability to <strong>remove the destination visual or report</strong> for a code (rendering the embed code unusable), or getting the embed code.<br><br>Deleting the embedded codes immediately prevents the visualizations from being displayed on the blog.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-publish-to-web' target='_blank'>Publish to web from Power BI</a>",
    category: "Power BI Service",
    tags: ["Publish to web", "embed codes", "delete", "blog", "private data"]
  },
  {
    id: 286,
    question: "You have an app workspace that contains two datasets named dataset1 and dataset2. Dataset1 connects to a Microsoft Azure SQL database. Dataset2 connects to a Microsoft Excel file stored in Microsoft OneDrive for Business.<br><br>You create a report named Report1 that uses dataset1.<br><br>You pin Report1 to a dashboard named Dashboard1.<br><br>You publish the app workspace to all the users in your organization.<br><br>You need to delete dataset2 from the app workspace.<br><br>What should you do first?",
    options: [
      "Delete Dashboard1.",
      "Delete Report1.",
      "Unpublish the app.",
      "Configure the refresh settings for Dataset2."
    ],
    correctAnswer: 2,
    explanation: "<strong>Unpublish the app.</strong><br><br>Dataset1 and Dataset2 are both contained in the published app. To delete dataset2 from the app workspace, you must first <strong>unpublish the app</strong>, then delete the unwanted dataset, and finally republish the app. You cannot delete a dataset that is part of a published app without unpublishing first.",
    category: "Power BI Service",
    tags: ["app workspace", "unpublish", "delete dataset", "OneDrive", "Azure SQL"]
  },
  {
    id: 287,
    question: "Which function will tell you the logged on username in the Power BI Service?",
    options: [
      "LOOKUPVALUE()",
      "USERPRINCIPALNAME()",
      "USEROBJECTID()"
    ],
    correctAnswer: 1,
    explanation: "<strong>USERPRINCIPALNAME()</strong><br><br>The <strong>USERPRINCIPALNAME()</strong> DAX function returns the user principal name (UPN) of the currently logged-on user in the Power BI Service. This is commonly used in dynamic row-level security (RLS) to filter data based on who is viewing the report.<br><br>• LOOKUPVALUE() retrieves a value from a table based on a filter<br>• USEROBJECTID() returns the Azure AD object ID, not the username",
    category: "Security & Admin",
    tags: ["USERPRINCIPALNAME", "DAX", "logged on user", "RLS", "dynamic security"]
  },
  {
    id: 288,
    question: "Where can you test RLS by using different security roles?",
    options: [
      "Power BI Desktop only",
      "Power BI Service only",
      "Both Power BI Desktop and Power BI Service"
    ],
    correctAnswer: 2,
    explanation: "<strong>Both Power BI Desktop and Power BI Service</strong><br><br>You can test row-level security (RLS) in both environments:<br>• In <strong>Power BI Desktop</strong>, use the 'View as' feature on the Modeling tab to test roles<br>• In <strong>Power BI Service</strong>, use the 'Test as role' option in the dataset security settings<br><br>Both provide the ability to validate that RLS filters are working correctly before distributing reports.",
    category: "Security & Admin",
    tags: ["RLS", "test", "security roles", "Power BI Desktop", "Power BI Service"]
  },
  {
    id: 289,
    question: "You have four sales regions. Each region has multiple sales managers.<br><br>You implement row-level security (RLS) in a data model. You assign the relevant distribution lists to each role.<br><br>You have sales reports that enable analysis by region. The sales managers can view the sales records of their region. The sales managers are prevented from viewing records from other regions.<br><br>A sales manager changes to a different region.<br><br>You need to ensure that the sales manager can see the correct sales data.<br><br>What should you do?",
    options: [
      "Change the Microsoft Power BI license type of the sales manager.",
      "From Microsoft Power BI Desktop, edit the Row-Level Security setting for the reports.",
      "Request that the sales manager be added to the correct Azure Active Directory group.",
      "Manage the permissions of the underlying dataset."
    ],
    correctAnswer: 2,
    explanation: "<strong>Request that the sales manager be added to the correct Azure Active Directory group.</strong><br><br>Using <strong>AD Security Groups</strong>, you no longer need to maintain a long list of individual users. When a sales manager changes regions, you simply move them to the correct AD Security group. Power BI RLS roles are mapped to these security groups, so the correct data access is automatically applied.<br><br>This approach means a small and simple security file with the permissions and AD Security group names, and the actual user management is handled in Azure AD.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/guidance/rls-guidance' target='_blank'>RLS guidance in Power BI</a>",
    category: "Security & Admin",
    tags: ["RLS", "Azure AD", "security group", "sales region", "role mapping"]
  },
  {
    id: 290,
    question: "You have a Microsoft Power BI data model that contains three tables named Orders, Date, and City. There is a one-to-many relationship between Date and Orders and between City and Orders.<br><br>The model contains two row-level security (RLS) roles named Role1 and Role2.<br><br>Role1 contains the following filter:<br><code>City[State Province] = \"Kentucky\"</code><br><br>Role2 contains the following filter:<br><code>Date[Calendar Year] = 2020</code><br><br>If a user is a member of both Role1 and Role2, what data will they see in a report that uses the model?",
    options: [
      "The user will see data for which the State Province value is Kentucky and the Calendar Year is 2020.",
      "The user will see data for which the State Province value is Kentucky or the Calendar Year is 2020.",
      "The user will see only data for which the State Province value is Kentucky.",
      "The user will receive an error and will not be able to see the data in the report."
    ],
    correctAnswer: 0,
    explanation: "<strong>The user will see data for which the State Province value is Kentucky and the Calendar Year is 2020.</strong><br><br>When a report user is assigned to <strong>multiple RLS roles</strong>, the filters become <strong>additive</strong> (union of roles). However, since Role1 filters on the <strong>City</strong> table and Role2 filters on the <strong>Date</strong> table, both filters apply simultaneously through their relationships to the Orders table. The result is that the user sees Orders where State Province is Kentucky <strong>AND</strong> Calendar Year is 2020.<br><br>Note: Roles are unioned per table, but filters on different tables act as an intersection on the fact table.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/guidance/rls-guidance' target='_blank'>RLS guidance in Power BI</a>",
    category: "Security & Admin",
    tags: ["RLS", "multiple roles", "additive", "filter", "one-to-many", "intersection"]
  },
  {
    id: 291,
    question: "Which of the following functions allows you to define filtered views for a specific list of users?",
    options: [
      "USER",
      "USERPRINCIPALNAME",
      "ROLE",
      "USERELATIONSHIP"
    ],
    correctAnswer: 1,
    explanation: "<strong>USERPRINCIPALNAME</strong><br><br>Dynamic roles allow you to define filtered views for a specific list of users with the DAX functions <strong>USERNAME</strong> or <strong>USERPRINCIPALNAME</strong>. These functions return the identity of the logged-in user, enabling dynamic row-level security.<br><br>• ROLE is not a DAX function for user identification<br>• USERELATIONSHIP changes the active relationship for a calculation, not user filtering",
    category: "Security & Admin",
    tags: ["USERPRINCIPALNAME", "dynamic RLS", "filtered views", "DAX", "USERNAME"]
  },
  {
    id: 292,
    question: "RLS rules can be applied to users with which permission level?",
    options: [
      "Admin",
      "Member",
      "Contributor",
      "Viewer"
    ],
    correctAnswer: 3,
    explanation: "<strong>Viewer</strong><br><br>Once RLS rules have been defined in Power BI Desktop, they can be applied to users who have <strong>Viewer permissions</strong> in Power BI Service. Admin, Member, and Contributor roles have edit access to the dataset, and RLS is not applied to them — they see all data. Only Viewers are restricted by RLS rules.",
    category: "Security & Admin",
    tags: ["RLS", "Viewer", "permission level", "workspace roles", "security"]
  },
  {
    id: 293,
    question: "<img src='images/q293-exhibit.jpeg' alt='Question 293 Exhibit - Schema model with Store, Sales, Date, District, and Item tables' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have the schema model shown in the exhibit. The model has the following relationships:<br>• Store to District based on DistrictID<br>• Sales to Store based on LocationID<br>• Sales to Date based on PeriodID<br>• Sales to Item based on ItemID<br><br>You configure row-level security (RLS) so that the district managers of the stores only see the sales from the stores they manage.<br><br>When the district managers view the Store by Items report, they see items for all the stores.<br><br>You need to ensure that the district managers can see items for the stores they manage only.<br><br>How should you configure the relationship from Sales to Item?",
    options: [
      "Select Assume Referential Integrity.",
      "Change the Cardinality to One to Many (1:*).",
      "Change the Cross filter direction to Both.",
      "Change the Cardinality to One to one (1:1)."
    ],
    correctAnswer: 2,
    explanation: "<strong>Change the Cross filter direction to Both.</strong><br><br>Row-level security filtering uses <strong>single-directional filters</strong> by default, regardless of whether the relationships are set to single direction or bi-directional. You can manually enable <strong>bi-directional cross-filter</strong> with row-level security by selecting the relationship and checking the <strong>Apply security filter in both directions</strong> checkbox.<br><br>In this scenario, the RLS filter on District flows through Store → Sales, but doesn't flow from Sales → Item because the Sales-to-Item relationship is single-directional. Changing to bi-directional cross-filtering allows the RLS filter to propagate to the Item table.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/service-admin-rls' target='_blank'>Row-level security with Power BI</a>",
    category: "Security & Admin",
    tags: ["RLS", "cross filter", "bi-directional", "relationship", "schema model"]
  },
  {
    id: 294,
    question: "You have a Power BI semantic model named Model1 that contains four tables named Sales, Date, Product, and Employee. The Sales table is related to the Date, Product, and Employee tables.<br><br>You need to create a row-level security (RLS) role that meets the following requirements:<br>• Employees must be able to view their respective sales only.<br>• The RLS filter must match the user to their email address.<br><br>Which table filter expression should you use for the RLS role?",
    options: [
      "Employee[EmailAddress] = USERCULTURE()",
      "Employee[EmailAddress] = USERNAME()",
      "Employee[EmailAddress] = USEROBJECTID()",
      "Employee[EmailAddress] = USERPRINCIPALNAME()"
    ],
    correctAnswer: 3,
    explanation: "<strong>Employee[EmailAddress] = USERPRINCIPALNAME()</strong><br><br>The <strong>USERPRINCIPALNAME()</strong> function returns the user's email address (UPN) in Power BI Service, which can be matched against the Employee table's EmailAddress column to filter data to only that employee's sales.<br><br>• USERCULTURE() returns the locale, not the user identity<br>• USERNAME() returns domain\\username format, not email<br>• USEROBJECTID() returns the Azure AD object ID, not email",
    category: "Security & Admin",
    tags: ["RLS", "USERPRINCIPALNAME", "email", "dynamic security", "Employee"]
  },
  {
    id: 295,
    question: "You have a Power BI workspace named WS1.<br><br>You publish a semantic model named Model1 to WS1. Model1 contains a row-level security (RLS) role named RLS1.<br><br>You plan to use a group to add members to RLS1.<br><br>What should you use?",
    options: [
      "An Active Directory Domain Services security group",
      "A distribution list",
      "A Microsoft 365 group",
      "A Microsoft Entra security group"
    ],
    correctAnswer: 3,
    explanation: "<strong>A Microsoft Entra security group</strong><br><br>Power BI only supports <strong>Microsoft Entra security groups</strong> (formerly Azure AD security groups) for Row-Level Security (RLS) role assignments.<br><br>• <strong>AD DS security groups</strong> are for on-premises environments and are not supported in Power BI Service<br>• <strong>Distribution lists</strong> are only for email purposes and do not work for RLS<br>• <strong>Microsoft 365 groups</strong> are for collaboration (Teams, SharePoint) but cannot be used for RLS assignments",
    category: "Security & Admin",
    tags: ["RLS", "Microsoft Entra", "security group", "Azure AD", "workspace"]
  },
  {
    id: 296,
    question: "<img src='images/q296-exhibit-1.jpg' alt='Question 296 Exhibit - Actions and Answer Area for summary statistics' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are modeling data in a table named SalesDetail by using Microsoft Power BI. You need to provide end users with access to the summary statistics about the SalesDetail data. The users require insights on the completeness of the data and the value distributions.<br><br>Which three actions should you perform in sequence?<br><br><img src='images/q296-exhibit-2.jpg' alt='Question 296 Exhibit - Correct answer sequence' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: Create a blank query as a data source | Step 2: Specify the query =Table.Profile(#\"SalesDetail\"), then close and apply | Step 3: Create a visual for the query table",
      "Step 1: Create a query that uses Common Data Service as a data source | Step 2: Specify the query =Table.Distinct(#\"SalesDetail\"), then close and apply | Step 3: Create a visual for the query table",
      "Step 1: Create a blank query as a data source | Step 2: Specify the query =Table.Distinct(#\"SalesDetail\"), then close and apply | Step 3: Create a parameter that uses a query for the suggested values",
      "Step 1: Create a parameter that uses a query for the suggested values | Step 2: Specify the query =Table.Profile(#\"SalesDetail\"), then close and apply | Step 3: Create a visual for the query table"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Create a blank query as a data source</strong><br><strong>Step 2: Specify the following query, then close and apply: =Table.Profile(#\"SalesDetail\")</strong><br><strong>Step 3: Create a visual for the query table</strong><br><br>The <strong>Table.Profile()</strong> function takes a table as input and returns a table that displays, for each column in the original table: minimum, maximum, average, standard deviation, count of values, count of null values, and count of distinct values — providing completeness and distribution insights.<br><br>Start with a blank query, enter the Table.Profile formula, then create visuals from the resulting profiling table.<br><br>Reference: <a href='https://radacad.com/create-a-profiling-report-in-power-bi-give-the-end-user-information-about-the-data' target='_blank'>Create a profiling report in Power BI</a>",
    category: "Power Query",
    tags: ["Table.Profile", "blank query", "summary statistics", "completeness", "value distributions"]
  },
  {
    id: 297,
    question: "You are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than 100 million records.<br><br>During the development process, you need to import a sample of the data from the Order table.<br><br>Solution: You add a report-level filter that filters based on the order date.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>A report-level filter is applied <strong>after</strong> the data is imported — it does not reduce the amount of data imported into the model. All 100 million records would still be loaded, and only the visual display would be filtered.<br><br>Instead, you should add a <strong>WHERE clause to the SQL statement</strong> or use query parameters in Power Query to filter the data at the source, so only a sample is actually imported.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-sql-tutorial' target='_blank'>SQL Server gateway tutorial</a>",
    category: "Data Modeling",
    tags: ["report-level filter", "import", "SQL Server", "sample data", "WHERE clause"]
  },
  {
    id: 298,
    question: "<img src='images/q298-exhibit-1.jpg' alt='Question 298 Exhibit - Actions and Answer Area for SalesDetail profiling' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are modeling data in a table named SalesDetail by using Microsoft Power BI.<br><br>You need to provide end users with access to the summary statistics about the SalesDetail data. The users require insights on the completeness of the data and the value distributions.<br><br>Which three actions should you perform in sequence?<br><br><img src='images/q298-exhibit-2.jpg' alt='Question 298 Exhibit - Correct answer sequence' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: Create a blank query as a data source | Step 2: Specify the query =Table.Profile(# \"SalesDetail\"), then close and apply | Step 3: Create a visual on a report page using fields from the new table",
      "Step 1: Create a parameter that uses a query for the suggested values | Step 2: Specify the query =Table.Profile(# \"SalesDetail\"), then close and apply | Step 3: Create a visual on a report page using fields from the new table",
      "Step 1: Create a blank query as a data source | Step 2: Specify the query =Table.Distinct(# \"SalesDetail\"), then close and apply | Step 3: Create a visual on a report page using fields from the new table",
      "Step 1: Create a query that uses Common Data Service as a data source | Step 2: Specify the query =Table.Distinct(# \"SalesDetail\"), then close and apply | Step 3: Create a visual on a report page using fields from the new table"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Create a blank query as a data source</strong><br><strong>Step 2: Specify the following query, then close and apply: =Table.Profile(# \"SalesDetail\")</strong><br><strong>Step 3: Create a visual on a report page using fields from the new table</strong><br><br>The <strong>Table.Profile()</strong> function returns summary statistics for each column: minimum, maximum, average, standard deviation, count of values, count of null values, and count of distinct values.<br><br>Create a blank query, type the Table.Profile formula referencing SalesDetail, then load the profiling data and create visuals from it.<br><br>Reference: <a href='https://radacad.com/create-a-profiling-report-in-power-bi-give-the-end-user-information-about-the-data' target='_blank'>Create a profiling report in Power BI</a>",
    category: "Power Query",
    tags: ["Table.Profile", "blank query", "summary statistics", "data profiling", "SalesDetail"]
  },
  {
    id: 299,
    question: "<img src='images/q299-exhibit-1.jpg' alt='Question 299 Exhibit - Excel spreadsheet data with Measure, Revenue, Overheads, Cost of Goods for years 2016-2020' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are preparing a financial report in Power BI. You connect to the data stored in a Microsoft Excel spreadsheet by using Power Query Editor as shown in the exhibit.<br><br>You need to prepare the data to support the following:<br>• Visualizations that include all measures in the data over time<br>• Year-over-year calculations for all the measures<br><br>Which four actions should you perform in sequence?<br><br><img src='images/q299-exhibit-2.jpg' alt='Question 299 Exhibit - Actions: Rename Attribute/Measure column, Use first row as headers, Unpivot, Transpose, Change data type' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q299-exhibit-3.jpg' alt='Question 299 Exhibit - Correct answer: Transpose, Unpivot, Rename Measure column as Year, Change data type of Year column to Date' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: Transpose the table | Step 2: Unpivot all the columns other than Measure | Step 3: Rename the Measure column as Year | Step 4: Change the data type of the Year column to Date",
      "Step 1: Use the first row as headers | Step 2: Unpivot all the columns other than Measure | Step 3: Rename the Attribute column as Year | Step 4: Change the data type of the Year column to Date",
      "Step 1: Transpose the table | Step 2: Use the first row as headers | Step 3: Rename the Attribute column as Year | Step 4: Change the data type of the Year column to Date",
      "Step 1: Use headers as the first row | Step 2: Transpose the table | Step 3: Unpivot all the columns other than Measure | Step 4: Rename the Measure column as Year"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Transpose the table</strong> — Swap rows and columns so years become rows<br><strong>Step 2: Unpivot all the columns other than Measure</strong> — Convert the wide format (multiple measure columns) into a tall format with Measure, Attribute, and Value columns<br><strong>Step 3: Rename the Measure column as Year</strong> — The transposed Measure column now contains year values<br><strong>Step 4: Change the data type of the Year column to Date</strong> — Enable date hierarchies and year-over-year calculations<br><br>Reference: <a href='https://support.microsoft.com/en-us/office/unpivot-columns-power-query-0f7bad4b-9ea1-49c1-9d95-f588221c7098' target='_blank'>Unpivot columns (Power Query)</a>",
    category: "Power Query",
    tags: ["Transpose", "Unpivot", "Rename", "data type", "financial report", "year-over-year"]
  },
  {
    id: 300,
    question: "<img src='images/q300-exhibit-1.png' alt='Question 300 Exhibit - DAX formula with dropdown selections for Product Category % of Total' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a Microsoft Power BI data model that contains three tables named Sales, Product, and Date.<br><br>The Sales table has an existing measure named [Total Sales] that sums the total sales from the Sales table.<br><br>You need to write a calculation that returns the percentage of total sales that a selected ProductCategoryName value represents. The calculation must respect any slicers on ProductCategoryName and must show the percentage of visible total sales.<br><br>How should you complete the calculation?<br><br><img src='images/q300-exhibit-2.png' alt='Question 300 Exhibit - Answer: DIVIDE, CALCULATE, ALLSELECTED' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Box 1: DIVIDE | Box 2: CALCULATE | Box 3: ALLSELECTED",
      "Box 1: CALCULATE | Box 2: DIVIDE | Box 3: ALL",
      "Box 1: DIVIDE | Box 2: CALCULATETABLE | Box 3: ALLSELECTED",
      "Box 1: SUMMARIZE | Box 2: CALCULATE | Box 3: CURRENTGROUP"
    ],
    correctAnswer: 0,
    explanation: "<strong>Box 1: DIVIDE</strong> — Use DIVIDE to safely calculate numerator / denominator<br><strong>Box 2: CALCULATE</strong> — Evaluates [Total Sales] in a modified filter context<br><strong>Box 3: ALLSELECTED</strong> — Removes context filters from ProductCategoryName while retaining slicer filters<br><br>The full formula:<br><code>Product Category % of Total 2 = DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED(Product[ProductCategoryName])))</code><br><br>ALLSELECTED retains slicer filters but removes row-level context, so the denominator shows the total of all <strong>visible</strong> categories. This ensures percentages sum to 100% for the filtered set.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/dax/allselected-function-dax' target='_blank'>ALLSELECTED function (DAX)</a>",
    category: "DAX",
    tags: ["DIVIDE", "CALCULATE", "ALLSELECTED", "percentage of total", "DAX", "slicer"]
  },
  {
    id: 301,
    question: "<img src='images/q301-exhibit-1.png' alt='Question 301 Exhibit - Actions for building a mobile dashboard' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are using existing reports to build a dashboard that will be viewed frequently in portrait mode on mobile phones.<br><br>You need to build the dashboard.<br><br>Which four actions should you perform in sequence?<br><br><img src='images/q301-exhibit-2.png' alt='Question 301 Exhibit - Correct answer sequence' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: Open the dashboard | Step 2: Change the dashboard view to Phone view | Step 3: Pin items from the reports to the dashboard | Step 4: Rearrange, resize, or remove items from the Phone view",
      "Step 1: Create a phone layout for the existing reports | Step 2: Open the dashboard | Step 3: Pin items from the reports to the dashboard | Step 4: Change the dashboard view to Phone view",
      "Step 1: Open the dashboard | Step 2: Pin items from the reports to the dashboard | Step 3: Rearrange, resize, or remove items from the Phone view | Step 4: Change the dashboard view to Phone view",
      "Step 1: Pin items from the reports to the dashboard | Step 2: Open the dashboard | Step 3: Change the dashboard view to Phone view | Step 4: Create a phone layout for the existing reports"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Open the dashboard</strong><br><strong>Step 2: Change the dashboard view to Phone view</strong><br><strong>Step 3: Pin items from the reports to the dashboard</strong><br><strong>Step 4: Rearrange, resize, or remove items from the Phone view</strong><br><br>In the Power BI service:<br>1. Open the dashboard<br>2. Select Phone view from the view options<br>3. Pin tiles from reports to the dashboard<br>4. Customize the layout by rearranging, resizing, or removing items for optimal mobile viewing<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-create-dashboard-mobile-phone-view' target='_blank'>Create a phone view of a dashboard</a>",
    category: "Power BI Service",
    tags: ["dashboard", "phone view", "mobile", "portrait mode", "pin items"]
  },
  {
    id: 302,
    question: "<img src='images/q302-exhibit-1.png' alt='Question 302 Exhibit - Line chart showing monthly order counts' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have the line chart shown in the exhibit.<br><br>You need to modify the chart to meet the following requirements:<br>• Identify months that have order counts above the mean.<br>• Display the mean monthly order count.<br><br>Which three actions should you perform in sequence?<br><br><img src='images/q302-exhibit-2.png' alt='Question 302 Exhibit - Actions for adding average line' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: Select the line chart | Step 2: From the Analytics pane, add an Average line | Step 3: Turn on data labels for the new line",
      "Step 1: Select the line chart | Step 2: From the Analytics pane, add a Median line | Step 3: Turn on data labels for the new line",
      "Step 1: Select the line chart | Step 2: Create a 12-month rolling average quick measure and add the measure to the line chart value | Step 3: Turn on data labels for the new line",
      "Step 1: Create a 12-month rolling average quick measure and add the measure to the line chart value | Step 2: Select the line chart | Step 3: From the Analytics pane, add a Median line"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Select the line chart</strong><br><strong>Step 2: From the Analytics pane, add an Average line</strong><br><strong>Step 3: Turn on data labels for the new line</strong><br><br>The <strong>Analytics pane</strong> in Power BI allows you to add reference lines such as average, median, min, max, etc. Adding an <strong>Average line</strong> displays the mean monthly order count. Enabling <strong>data labels</strong> shows the actual mean value on the chart, helping users identify months above the mean.<br><br>Reference: <a href='https://community.powerbi.com/t5/Desktop/Moving-Average/td-p/43041' target='_blank'>Average line in Power BI</a>",
    category: "Visualization",
    tags: ["line chart", "Analytics pane", "Average line", "data labels", "mean"]
  },
  {
    id: 303,
    question: "<img src='images/q303-exhibit-1.jpg' alt='Question 303 Exhibit - Customer query with 50,000 rows and duplicate customer IDs' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a query named Customer that imports CSV files from a data lake. The query contains 50,000 rows.<br><br>Each file contains deltas of any new or modified rows from each load to the data lake. Multiple files can have the same customer ID.<br><br>You need to keep only the last modified row for each customer ID.<br><br>Which three actions should you perform in sequence?<br><br><img src='images/q303-exhibit-2.png' alt='Question 303 Exhibit - Actions for deduplication' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: Duplicate the Customer query and name it CustomerGrouped | Step 2: Group the CustomerGrouped query by Customer ID and output the max Modified Date | Step 3: Merge the two queries based on Customer ID and Modified Date by using an inner join",
      "Step 1: Filter the Customer query on Modified Date is Latest | Step 2: Remove duplicates in the Customer ID column | Step 3: Merge the CustomerGrouped query into the Customer query using a left outer join",
      "Step 1: Remove duplicates in the Customer ID column | Step 2: Group the CustomerGrouped query by Customer ID and output the max Modified Date | Step 3: Filter the Customer query on Modified Date is Latest",
      "Step 1: Duplicate the Customer query and name it CustomerGrouped | Step 2: Merge the CustomerGrouped query into the Customer query using a left outer join | Step 3: Remove duplicates in the Customer ID column"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Duplicate the Customer query and name the new query CustomerGrouped</strong><br><strong>Step 2: Group the CustomerGrouped query by Customer ID to find the max Modified Date value</strong><br><strong>Step 3: Merge the two queries based on Customer ID and Modified Date by using an inner join</strong><br><br>This approach:<br>1. Creates a reference query with only the latest date per customer<br>2. Groups to get the maximum modified date for each customer ID<br>3. Inner joins back to the original to keep only the rows matching the latest modified date",
    category: "Power Query",
    tags: ["duplicate query", "group by", "max date", "merge", "inner join", "deduplication"]
  },
  {
    id: 304,
    question: "<img src='images/q304-exhibit-1.png' alt='Question 304 Exhibit - User capabilities table: User1 creates and publishes apps, User2 publishes reports and deletes dashboards' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a Power BI workspace.<br><br>You need to grant the user capabilities shown in the exhibit. The solution must use the principle of least privilege.<br><br>Which user role should you assign to each user?<br><br><img src='images/q304-exhibit-2.png' alt='Question 304 Exhibit - Roles: Admin, Contributor, Member, Viewer' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "User1: Member | User2: Contributor",
      "User1: Admin | User2: Member",
      "User1: Admin | User2: Contributor",
      "User1: Contributor | User2: Viewer"
    ],
    correctAnswer: 0,
    explanation: "<strong>User1: Member</strong> — The Member role can create and publish apps. Admin can also do this, but Member satisfies the principle of least privilege.<br><br><strong>User2: Contributor</strong> — The Contributor role can publish reports to the workspace and delete dashboards. Member can also do this, but Contributor is the least privilege needed.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-new-workspaces' target='_blank'>Workspace roles in Power BI</a>",
    category: "Security & Admin",
    tags: ["workspace roles", "Member", "Contributor", "least privilege", "permissions"]
  },
  {
    id: 305,
    question: "<img src='images/q305-exhibit.jpeg' alt='Question 305 Exhibit - Actions for Q&A synonyms' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>From Power BI service, you publish an app that contains one dashboard and one report. Q&A is enabled on the dashboard.<br><br>In Q&A, a user types the query \"count of clients\" and fails to receive any results. The user then types the query \"count of subscribers\" and receives the expected results.<br><br>You need to ensure that the user can use both queries to receive the same results.<br><br>Which four actions should you perform in sequence?",
    options: [
      "Step 1: Open the report by using Power BI Desktop | Step 2: Edit the synonyms | Step 3: Publish the report to App Workspaces | Step 4: Update the app from powerbi.com",
      "Step 1: Edit the dashboard settings from powerbi.com | Step 2: Edit the synonyms | Step 3: Publish the report to App Workspaces | Step 4: Update the app from powerbi.com",
      "Step 1: Open the report by using Power BI Desktop | Step 2: Edit the synonyms | Step 3: Delete and publish the app | Step 4: Enable and configure Data classification for dashboards",
      "Step 1: Edit the dashboard settings from powerbi.com | Step 2: Enable and configure Data classification for dashboards | Step 3: Publish the report to App Workspaces | Step 4: Edit the synonyms"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Open the report by using Power BI Desktop</strong><br><strong>Step 2: Edit the synonyms</strong> (add \"clients\" as a synonym for \"subscribers\")<br><strong>Step 3: Publish the report to App Workspaces</strong><br><strong>Step 4: Update the app from powerbi.com</strong><br><br>Synonyms for Q&A are edited in Power BI Desktop. After editing, you republish to the workspace and then update the app so the changes are reflected for end users.<br><br>Reference: <a href='https://community.powerbi.com/t5/Desktop/Edit-the-synonyms-from-Power-BI-Services/m-p/700219' target='_blank'>Edit synonyms for Q&A</a>",
    category: "Power BI Service",
    tags: ["Q&A", "synonyms", "Power BI Desktop", "publish", "update app"]
  },
  {
    id: 306,
    question: "<img src='images/q306-exhibit-1.png' alt='Question 306 Exhibit - Sales and Product tables' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You plan to create a report in Power BI Desktop. You have a measure that uses the following DAX formula:<br><code>Total Sales = SUM('Sales'[SalesAmount])</code><br><br>You plan to create a report to display TotalSales by ProductCategory and ProductSubCategory.<br><br>You need to create a measure to calculate the percentage of TotalSales for each ProductCategory.<br><br>How should you complete the DAX formula?<br><br><img src='images/q306-exhibit-2.jpg' alt='Question 306 Exhibit - DAX formula with dropdown selections' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Measure1 = DIVIDE([TotalSales], CALCULATE([TotalSales], ALL(Sales[ProductCategory], Sales[ProductSubcategory])))",
      "Measure1 = DIVIDE([TotalSales], CALCULATE([TotalSales], ALLSELECTED(Sales[ProductCategory], Sales[ProductSubcategory])))",
      "Measure1 = CALCULATE([TotalSales], DIVIDE([TotalSales], ALL(Sales[ProductCategory], Sales[ProductSubcategory])))",
      "Measure1 = DIVIDE([TotalSales], CALCULATE([TotalSales], ALLEXCEPT(Sales[ProductCategory], Sales[ProductSubcategory])))"
    ],
    correctAnswer: 0,
    explanation: "<strong>Measure1 = DIVIDE([TotalSales], CALCULATE([TotalSales], ALL(Sales[ProductCategory], Sales[ProductSubcategory])))</strong><br><br>• <strong>DIVIDE</strong> safely divides the current row's TotalSales by the grand total<br>• <strong>CALCULATE</strong> evaluates TotalSales with a modified filter context<br>• <strong>ALL(Sales[ProductCategory], Sales[ProductSubcategory])</strong> removes filters on both columns, giving the overall total as the denominator<br><br>This produces the percentage each ProductCategory represents of the overall TotalSales.",
    category: "DAX",
    tags: ["DIVIDE", "CALCULATE", "ALL", "percentage", "ProductCategory", "DAX"]
  },
  {
    id: 307,
    question: "<img src='images/q307-exhibit-1.png' alt='Question 307 Exhibit - Customer table with SSN column in 999-99-9999 format' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a customer table in Power BI Desktop. The customer table contains an SSN column.<br><br>You need to create a custom column that hides the first three digits of the SSN. The values in the new column must have the xxx-99-9999 format.<br><br>How should you complete the Query Editor formula?<br><br><img src='images/q307-exhibit-2.png' alt='Question 307 Exhibit - Formula with dropdown: Value([SSN], Value([SSN],4), \"xxx-\")' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Text.Replace([SSN], Text.Start([SSN], 4), \"xxx-\")",
      "Text.Replace([SSN], Text.Range([SSN], 4), \"xxx-\")",
      "Text.Insert([SSN], Text.Start([SSN], 4), \"xxx-\")",
      "Text.End([SSN], Text.Start([SSN], 4), \"xxx-\")"
    ],
    correctAnswer: 0,
    explanation: "<strong>Text.Replace([SSN], Text.Start([SSN], 4), \"xxx-\")</strong><br><br>• <strong>Text.Replace</strong> replaces a substring within the text<br>• <strong>Text.Start([SSN], 4)</strong> gets the first 4 characters (e.g., \"123-\")<br>• Replaces \"123-\" with \"xxx-\" to produce \"xxx-99-9999\" format<br><br>This effectively masks the first three digits of the SSN while preserving the rest of the number.",
    category: "Power Query",
    tags: ["Text.Replace", "Text.Start", "SSN", "masking", "custom column"]
  },
  {
    id: 308,
    question: "<img src='images/q308-exhibit.png' alt='Question 308 Exhibit - Actions for embedding report in SharePoint' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You create a report in Power BI Desktop.<br><br>You need to embed the report into a Microsoft SharePoint Online site.<br><br>Which three actions should you perform in sequence?",
    options: [
      "Step 1: Publish the report to the Power BI service | Step 2: Obtain an embed link for SharePoint | Step 3: Add a webpart to a page",
      "Step 1: Publish the report to the Power BI service | Step 2: Pin a visualization | Step 3: Add a webpart to a page",
      "Step 1: Obtain an embed link for SharePoint | Step 2: Pin a live page | Step 3: Add a webpart to a page",
      "Step 1: Pin a visualization | Step 2: Publish the report to the Power BI service | Step 3: Obtain an embed link for SharePoint"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: Publish the report to the Power BI service</strong><br><strong>Step 2: Obtain an embed link for SharePoint</strong><br><strong>Step 3: Add a webpart to a page</strong> (Power BI web part)<br><br>To embed a Power BI report in SharePoint Online:<br>1. Publish the report to Power BI service<br>2. Get the embed URL for SharePoint<br>3. Add the Power BI web part to a SharePoint page and paste the URL<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/blog/integrate-power-bi-reports-in-sharepoint-online/' target='_blank'>Integrate Power BI reports in SharePoint Online</a>",
    category: "Power BI Service",
    tags: ["SharePoint Online", "embed", "webpart", "publish", "embed link"]
  },
  {
    id: 309,
    question: "<img src='images/q309-exhibit.jpg' alt='Question 309 Exhibit - Actions for adding insight tiles to dashboard' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a Power BI dashboard named DashboardA that contains a tile named TileA. TileA contains a treemap visual from a report named ReportA.<br><br>You need to provide the users of DashboardA with additional tiles that relate to the contents of TileA.<br><br>Which three actions should you perform in sequence?",
    options: [
      "Step 1: From DashboardA, select the TileA options, and then select View insights | Step 2: From Focus mode, review the generated visuals | Step 3: From Focus mode, pin the relevant visuals to DashboardA",
      "Step 1: From DashboardA, select TileA to open ReportA | Step 2: From ReportA, select the treemap visual options, and then select Spotlight | Step 3: From Focus mode, pin the relevant visuals to DashboardA",
      "Step 1: From ReportA, select Get Insights | Step 2: From Focus mode, review the generated visuals | Step 3: From Focus mode, pin the relevant visuals to DashboardA",
      "Step 1: From DashboardA, select TileA to open ReportA | Step 2: From ReportA, select Get Insights | Step 3: From Focus mode, review the generated visuals"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1: From DashboardA, select the TileA options, and then select View insights</strong><br><strong>Step 2: From Focus mode, review the generated visuals</strong><br><strong>Step 3: From Focus mode, pin the relevant visuals to DashboardA</strong><br><br>Power BI's <strong>View insights</strong> feature on dashboard tiles generates related visuals automatically. You review the AI-generated insights in Focus mode and pin the most relevant ones back to the dashboard.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/create-reports/service-insights' target='_blank'>View insights on dashboard tiles</a>",
    category: "Visualization",
    tags: ["View insights", "Focus mode", "pin", "dashboard", "treemap"]
  },
  {
    id: 310,
    question: "You are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than 100 million records.<br><br>During the development process, you need to import a sample of the data from the Order table.<br><br>Solution: From Power Query Editor, you import the table and then add a filter step to the query.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Adding a filter step in Power Query Editor <strong>after</strong> importing the table doesn't prevent all 100 million records from being initially loaded. The filter is applied in Power Query but may not fold back to the SQL source depending on the query structure.<br><br>Instead, you should add a <strong>WHERE clause directly to the SQL statement</strong> to filter at the source, ensuring only a sample of data is actually retrieved from SQL Server.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-sql-tutorial' target='_blank'>SQL Server gateway tutorial</a>",
    category: "Data Modeling",
    tags: ["Power Query Editor", "filter step", "SQL Server", "100 million records", "WHERE clause"]
  },
  {
    id: 311,
    question: "You are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than 100 million records.<br><br>During the development process, you need to import a sample of the data from the Order table.<br><br>Solution: You add a WHERE clause to the SQL statement.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>The <strong>WHERE clause</strong> has its effects <strong>before</strong> the data is imported. By adding a WHERE clause to the SQL statement, you filter the data at the source, ensuring only a sample of the 100 million records is actually retrieved and loaded into the Power BI model.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-sql-tutorial' target='_blank'>SQL Server gateway tutorial</a>",
    category: "Data Modeling",
    tags: ["WHERE clause", "SQL Server", "import sample", "source filtering", "100 million"]
  },
  {
    id: 312,
    question: "You create a parameter named DataSourceExcel that holds the file name and location of a Microsoft Excel data source.<br><br>You need to update the query to reference the parameter instead of multiple hard-coded copies of the location within each query definition.<br><br>Solution: In the Power Query M code, you replace references to the Excel file with DataSourceExcel.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Simply replacing references in the M code with the parameter name is not the correct approach. Instead, you should <strong>modify the source step of the queries</strong> to use DataSourceExcel as the file path. This properly parameterizes the data source connection at the source step level.<br><br>Reference: <a href='https://www.biinsight.com/power-bi-desktop-query-parameters-part-1/' target='_blank'>Power BI Desktop Query Parameters</a>",
    category: "Power Query",
    tags: ["parameter", "DataSourceExcel", "M code", "file path", "source step"]
  },
  {
    id: 313,
    question: "You create a parameter named DataSourceExcel that holds the file name and location of a Microsoft Excel data source.<br><br>You need to update the query to reference the parameter instead of multiple hard-coded copies of the location within each query definition.<br><br>Solution: You modify the source step of the queries to use DataSourceExcel as the file path.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>Modifying the <strong>source step</strong> of the queries to use DataSourceExcel as the file path is the correct approach. Parameterizing a data source at the source step allows you to dynamically change the file location without manually editing each query definition.<br><br>Reference: <a href='https://www.biinsight.com/power-bi-desktop-query-parameters-part-1/' target='_blank'>Power BI Desktop Query Parameters</a>",
    category: "Power Query",
    tags: ["parameter", "DataSourceExcel", "source step", "file path", "parameterize"]
  },
  {
    id: 314,
    question: "You create a parameter named DataSourceExcel that holds the file name and location of a Microsoft Excel data source.<br><br>You need to update the query to reference the parameter instead of multiple hard-coded copies of the location within each query definition.<br><br>Solution: You create a new query that references DataSourceExcel.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Creating a new query that references DataSourceExcel does not update the existing queries to use the parameter. Instead, you should <strong>modify the source step of the existing queries</strong> to use DataSourceExcel as the file path.<br><br>Reference: <a href='https://www.biinsight.com/power-bi-desktop-query-parameters-part-1/' target='_blank'>Power BI Desktop Query Parameters</a>",
    category: "Power Query",
    tags: ["parameter", "DataSourceExcel", "new query", "reference", "source step"]
  },
  {
    id: 315,
    question: "You are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than 100 million records.<br><br>During the development process, you need to import a sample of the data from the Order table.<br><br>Solution: You write a DAX expression that uses the FILTER function.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>A DAX FILTER expression is applied <strong>after</strong> the data is imported into the model. All 100 million records would still be loaded first. Instead, add a <strong>WHERE clause to the SQL statement</strong> to filter the data at the source before import.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-sql-tutorial' target='_blank'>SQL Server gateway tutorial</a>",
    category: "Data Modeling",
    tags: ["DAX", "FILTER function", "SQL Server", "import sample", "WHERE clause"]
  },
  {
    id: 316,
    question: "You have a clustered bar chart that contains a measure named Salary as the value and a field named Employee as the axis. Salary is present in the data as a numerical amount representing US dollars.<br><br>You need to create a reference line to show which employees are above the median salary.<br><br>Solution: You create an average line by using the Salary measure.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>An <strong>average line</strong> shows the mean, not the median. Instead, create a <strong>percentile line</strong> by using the Salary measure and set the percentile to <strong>50%</strong>. The 50th percentile is the median — the middle value where 50% of observations fall below.<br><br>Reference: <a href='https://dash-intel.com/powerbi/statistical_functions_percentile.php' target='_blank'>Statistical functions - Percentile</a>",
    category: "Visualization",
    tags: ["reference line", "median", "average line", "percentile", "clustered bar chart"]
  },
  {
    id: 317,
    question: "You have a clustered bar chart that contains a measure named Salary as the value and a field named Employee as the axis. Salary is present in the data as a numerical amount representing US dollars.<br><br>You need to create a reference line to show which employees are above the median salary.<br><br>Solution: You create a percentile line by using the Salary measure and set the percentile to 50%.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>The <strong>50th percentile</strong> is also known as the <strong>median</strong> — the middle value where 50% of observations fall below. Creating a percentile line at 50% correctly displays the median salary as a reference line.<br><br>Reference: <a href='https://dash-intel.com/powerbi/statistical_functions_percentile.php' target='_blank'>Statistical functions - Percentile</a>",
    category: "Power BI Service",
    tags: ["reference line", "median", "percentile", "50%", "Salary"]
  },
  {
    id: 318,
    question: "You have a clustered bar chart that contains a measure named Salary as the value and a field named Employee as the axis. Salary is present in the data as a numerical amount representing US dollars.<br><br>You need to create a reference line to show which employees are above the median salary.<br><br>Solution: You create a constant line and set the value to .5.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>A constant line set to 0.5 would display a fixed horizontal line at the value $0.50 — not the median salary. Instead, create a <strong>percentile line</strong> by using the Salary measure and set the percentile to <strong>50%</strong>. The 50th percentile dynamically calculates the median.<br><br>Reference: <a href='https://dash-intel.com/powerbi/statistical_functions_percentile.php' target='_blank'>Statistical functions - Percentile</a>",
    category: "Power BI Service",
    tags: ["reference line", "constant line", "median", "percentile", "0.5"]
  },
  {
    id: 319,
    question: "You have a clustered bar chart that contains a measure named Salary as the value and a field named Employee as the axis. Salary is present in the data as a numerical amount representing US dollars.<br><br>You need to create a reference line to show which employees are above the median salary.<br><br>Solution: You create a median line by using the Salary measure.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>A <strong>median line</strong> directly shows the median value of the Salary measure. The median (50th percentile) is the middle value where 50% of observations fall below. This correctly identifies which employees are above the median salary.<br><br>Reference: <a href='https://dash-intel.com/powerbi/statistical_functions_median.php' target='_blank'>Statistical functions - Median</a>",
    category: "Visualization",
    tags: ["reference line", "median line", "Salary", "clustered bar chart", "Analytics pane"]
  },
  {
    id: 320,
    question: "You have several reports and dashboards in a workspace.<br><br>You need to grant all organizational users read access to a dashboard and several reports.<br><br>Solution: You publish an app to the entire organization.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Publishing an app provides access to the app content, but does not specifically grant <strong>read-only access</strong> to the workspace. Instead, you should assign all the users the <strong>Viewer role</strong> to the workspace.<br><br>The Viewer role gives a read-only experience. Users can view dashboards, reports, or workbooks in the workspace, but can't browse datasets or dataflows.<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/blog/announcing-the-new-viewer-role-for-power-bi-workspaces/' target='_blank'>Viewer role for Power BI workspaces</a>",
    category: "Security & Admin",
    tags: ["Viewer role", "read access", "publish app", "workspace", "organization"]
  },
  {
    id: 321,
    question: "You have several reports and dashboards in a workspace.<br><br>You need to grant all organizational users read access to a dashboard and several reports.<br><br>Solution: You create an Azure Active Directory group that contains all the users. You share each report and dashboard to the group.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Sharing each report and dashboard individually is not efficient and doesn't follow best practices. Instead, assign all the users the <strong>Viewer role</strong> to the workspace. The Viewer role gives a read-only experience — users can view dashboards, reports, or workbooks but can't browse datasets or dataflows.<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/blog/announcing-the-new-viewer-role-for-power-bi-workspaces/' target='_blank'>Viewer role for Power BI workspaces</a>",
    category: "Security & Admin",
    tags: ["Viewer role", "Azure AD group", "share", "read access", "workspace"]
  },
  {
    id: 322,
    question: "You have several reports and dashboards in a workspace.<br><br>You need to grant all organizational users read access to a dashboard and several reports.<br><br>Solution: You assign all the users the Viewer role to the workspace.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>The <strong>Viewer role</strong> gives a read-only experience to its users. They can view dashboards, reports, or workbooks in the workspace, but can't browse the datasets or dataflows. This is the correct approach for granting read access.<br><br>Reference: <a href='https://powerbi.microsoft.com/en-us/blog/announcing-the-new-viewer-role-for-power-bi-workspaces/' target='_blank'>Viewer role for Power BI workspaces</a>",
    category: "Security & Admin",
    tags: ["Viewer role", "read access", "workspace", "read-only", "permissions"]
  },
  {
    id: 323,
    question: "You have several reports and dashboards in a workspace.<br><br>You need to grant all organizational users read access to a dashboard and several reports.<br><br>Solution: You enable included in app for all assets.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Enabling 'included in app' for all assets only controls which items appear in a published app — it does not grant read access to the workspace. Instead, assign all the users the <strong>Viewer role</strong> to the workspace for read-only access.",
    category: "Security & Admin",
    tags: ["included in app", "Viewer role", "read access", "workspace", "assets"]
  },
  {
    id: 324,
    question: "<img src='images/q324-exhibit-1.png' alt='Question 324 Exhibit - Database Diagram with tables' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q324-exhibit-2.jpeg' alt='Question 324 Exhibit - Power BI Model with Geography, Customer, Sales, Product, Product Subcategory, and Product Category tables' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You have a Microsoft SQL Server database with the tables shown in the exhibits. You plan to import data from 2013 to 2015. Product Subcategory[Subcategory] contains NULL values.<br><br>You implement the Power BI model. You need to add a new column to the Product Subcategory table that uses the following formula:<br><code>=if [Subcategory]=null then \"NA\" else [Subcategory]</code><br><br>Which command should you use in Query Editor?",
    options: [
      "Conditional Column",
      "Column From Examples",
      "Invoke Custom Function",
      "Custom Column"
    ],
    correctAnswer: 3,
    explanation: "<strong>Custom Column</strong><br><br>If you want to add a formula (like an if/then/else expression), you use a <strong>Custom Column</strong> in the Query Editor. A Conditional Column provides a form-based UI that generates the formula for you, but for writing a direct formula, Custom Column is the correct approach.<br><br>Reference: <a href='http://community.powerbi.com/t5/Desktop/if-then-else/td-p/117999' target='_blank'>If/then/else in Power BI</a>",
    category: "Power Query",
    tags: ["Custom Column", "if then else", "null", "Query Editor", "formula"]
  },
  {
    id: 325,
    question: "<img src='images/q325-exhibit-1.png' alt='Question 325 Exhibit - Database Diagram' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q325-exhibit-2.jpg' alt='Question 325 Exhibit - Power BI Model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You are implementing the Power BI model. You need to edit the Product Category query to match the desired Power BI model.<br><br>How should you complete the advanced query?<br><br><img src='images/q325-exhibit-3.png' alt='Question 325 Exhibit - Advanced query with dropdown values: Table.Combine, Table.RemoveColumns, Table.RemoveRows, Table.RenameColumns, Table.ReorderColumns, Table.SelectColumns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Var1: Table.RemoveColumns | Var2: Table.RenameColumns",
      "Var1: Table.SelectColumns | Var2: Table.RenameColumns",
      "Var1: Table.RemoveColumns | Var2: Table.ReorderColumns",
      "Var1: Table.RemoveRows | Var2: Table.RenameColumns"
    ],
    correctAnswer: 0,
    explanation: "<strong>Var1: Table.RemoveColumns</strong> — Removes unwanted columns (ProductCategoryAlternateKey, SpanishProductCategoryName, FrenchProductCategoryName)<br><strong>Var2: Table.RenameColumns</strong> — Renames EnglishProductCategoryName to Category<br><br>Reference: <a href='https://msdn.microsoft.com/en-us/library/mt260776.aspx' target='_blank'>Table.RemoveColumns</a> | <a href='https://msdn.microsoft.com/en-us/library/mt260808.aspx' target='_blank'>Table.RenameColumns</a>",
    category: "Power Query",
    tags: ["Table.RemoveColumns", "Table.RenameColumns", "advanced query", "M code", "Product Category"]
  },
  {
    id: 326,
    question: "<img src='images/q326-exhibit-1.png' alt='Question 326 Exhibit - Database Diagram' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q326-exhibit-2.jpg' alt='Question 326 Exhibit - Power BI Model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You implement the Power BI model. You need to create a hierarchy that has Category, Subcategory, and Product.<br><br>Which three actions should you perform in sequence?<br><br><img src='images/q326-exhibit-3.png' alt='Question 326 Exhibit - Actions including RELATED functions and Create a hierarchy' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Step 1: To the Product table, add a column named SubCategory that uses the RELATED('Product Subcategory'[Subcategory]) DAX function | Step 2: To the Product table, add a column named Category that uses the RELATED('Product Category'[Category]) DAX function | Step 3: Create a hierarchy",
      "Step 1: To the Product Subcategory table, add a calculated measure that uses the RELATED('Product Category'[Category]) DAX function | Step 2: To the Product table, add a column named Category that uses the RELATED('Product Category'[Category]) DAX function | Step 3: Create a hierarchy",
      "Step 1: To the Product table, add a column named Category that uses the RELATED('Product Category'[Category]) DAX function | Step 2: To the Product table, add a column named SubCategory that uses the RELATED('Product Subcategory'[Subcategory]) DAX function | Step 3: Create a hierarchy",
      "Step 1: To the Product Subcategory table, add a column named Category that uses the RELATED('Product Category'[ProductCategoryKey]) DAX function | Step 2: To the Product table, add a column named SubCategory that uses the RELATED('Product Subcategory'[Subcategory]) DAX function | Step 3: Create a hierarchy"
    ],
    correctAnswer: 0,
    explanation: "<strong>Step 1:</strong> Add a column named SubCategory to the Product table using <code>RELATED('Product Subcategory'[Subcategory])</code><br><strong>Step 2:</strong> Add a column named Category to the Product table using <code>RELATED('Product Category'[Category])</code><br><strong>Step 3:</strong> Create a hierarchy<br><br>Since there's no direct relationship between Product and Product Category, the Subcategory column must be added first (Product → Product Subcategory relationship exists). Then Category can be brought in. Finally, create the hierarchy with Category > Subcategory > Product.",
    category: "DAX",
    tags: ["RELATED", "hierarchy", "Product", "Subcategory", "Category", "calculated column"]
  },
  {
    id: 327,
    question: "<img src='images/q327-exhibit-1.jpeg' alt='Question 327 Exhibit - Power BI Model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You implement the Power BI model. You need to add a measure to rank total sales by product. The results must appear as shown in the following table.<br><br><img src='images/q327-exhibit-2.png' alt='Question 327 Exhibit - Ranking results table showing Dense ranking' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Which DAX formula should you use?",
    options: [
      "Product Ranking = RANKX(ALL('Product'), [SalesAmount],,Asc, Dense)",
      "Product Ranking = RANKX(ALL('Product'), [SalesAmount],,DESC, Skip)",
      "Product Ranking = RANKX(ALL('Product'), [SalesAmount],,DESC, Dense)",
      "Product Ranking = RANKX(Product, [SalesAmount],,DESC, Skip)"
    ],
    correctAnswer: 2,
    explanation: "<strong>Product Ranking = RANKX(ALL('Product'), [SalesAmount],,DESC, Dense)</strong><br><br>• <strong>ALL('Product')</strong> — evaluates against all products regardless of filter context<br>• <strong>DESC</strong> — highest sales get rank 1<br>• <strong>Dense</strong> — after a tie, the next rank value is consecutive (e.g., if rank 11 has a tie, the next value gets rank 12, not 13)<br><br>Reference: <a href='https://docs.microsoft.com/en-us/dax/rankx-function-dax' target='_blank'>RANKX function (DAX)</a>",
    category: "DAX",
    tags: ["RANKX", "ALL", "Dense", "DESC", "ranking", "DAX"]
  },
  {
    id: 328,
    question: "<img src='images/q328-exhibit-1.png' alt='Question 328 Exhibit - Database Diagram' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q324-exhibit-2.jpeg' alt='Question 328 Exhibit - Power BI Model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to create a measure of Sales[SalesAmount] where Product[Color] is Red or Product[Size] is 50.<br><br>Which DAX formula should you use?<br><br>A:<br><img src='images/q328-exhibit-2.png' alt='Option A - CALCULATE with direct OR filter on columns' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>B:<br><img src='images/q328-exhibit-3.png' alt='Option B - CALCULATE with FILTER on Product table using OR' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>C:<br><img src='images/q328-exhibit-4.png' alt='Option C - CALCULATE with FILTER missing table reference' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "A: CALCULATE(SUM([SalesAmount]), 'Product'[Color]=\"Red\" || 'Product'[Size]=50)",
      "B: CALCULATE(SUM([SalesAmount]), FILTER('Product', 'Product'[Color]=\"Red\" || 'Product'[Size]=50))",
      "C: CALCULATE(SUM([SalesAmount]), FILTER('Product'[Color]=\"Red\" || 'Product'[Size]=50))"
    ],
    correctAnswer: 1,
    explanation: "<strong>Option B: CALCULATE with FILTER on the 'Product' table</strong><br><br>When filtering over two columns with an OR condition, you must use <strong>FILTER</strong> over the entire table that contains both columns:<br><code>CALCULATE(SUM([SalesAmount]), FILTER('Product', 'Product'[Color]=\"Red\" || 'Product'[Size]=50))</code><br><br>Option A is incorrect because CALCULATE doesn't support direct OR conditions across columns. Option C is incorrect because FILTER requires a table as its first argument.<br><br>Reference: <a href='https://www.sqlbi.com/articles/filter-arguments-in-calculate/' target='_blank'>Filter arguments in CALCULATE</a>",
    category: "DAX",
    tags: ["CALCULATE", "FILTER", "OR condition", "SalesAmount", "Color", "Size", "DAX"]
  },
  {
    id: 329,
    question: "<img src='images/q329-exhibit-1.png' alt='Question 329 Exhibit - Database Diagram' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q325-exhibit-2.jpg' alt='Question 329 Exhibit - Power BI Model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You implement the Power BI model. You add another table named Territory to the model. A sample of the data is shown below.<br><br><img src='images/q329-exhibit-2.png' alt='Question 329 Exhibit - Territory table sample data with duplicate TerritoryKey values' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You need to create a relationship between the Territory table and the Sales table.<br><br>Which function should you use in the query for Territory before you create the relationship?",
    options: [
      "Table.Distinct",
      "Table.IsDistinct",
      "Table.ReplaceMatchingRows",
      "Table.RemoveMatchingRows"
    ],
    correctAnswer: 0,
    explanation: "<strong>Table.Distinct</strong><br><br>To create a relationship, the key column must have unique values. <strong>Table.Distinct</strong> removes duplicate rows based on the specified column (TerritoryKey), ensuring each key is unique for the relationship.<br><br>Usage: <code>#\"Removed Duplicates\" = Table.Distinct(#\"Previous Step\", {\"TerritoryKey\"})</code><br><br>• Table.IsDistinct only checks if values are distinct (returns true/false)<br>• Table.RemoveMatchingRows removes rows matching a specific value, not duplicates<br><br>Reference: <a href='https://docs.microsoft.com/en-us/powerquery-m/table-removematchingrows' target='_blank'>Table functions reference</a>",
    category: "Power Query",
    tags: ["Table.Distinct", "relationship", "duplicates", "TerritoryKey", "unique"]
  },
  {
    id: 330,
    question: "<img src='images/q330-exhibit-1.png' alt='Question 330 Exhibit - Database Diagram' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q330-exhibit-2.jpeg' alt='Question 330 Exhibit - Power BI Model' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You plan to add a table named Date to the model. The table will have columns for the date, year, month, and end of the last month, and will include data from January 1, 2013 to December 31, 2015.<br><br>The Date table and the Sales table will have a relationship.<br><br>Which DAX functions should you use to create the columns?",
    options: [
      "CALENDARAUTO, YEAR, MONTH, and EOMONTH",
      "CALENDAR, YEAR, MONTH, and ENDOFMONTH",
      "CALENDARAUTO, YEAR, MONTH, and ENDOFMONTH",
      "CALENDAR, YEAR, MONTH, and EOMONTH"
    ],
    correctAnswer: 3,
    explanation: "<strong>CALENDAR, YEAR, MONTH, and EOMONTH</strong><br><br>• <strong>CALENDAR</strong> (not CALENDARAUTO) — you need to specify exact dates (Jan 1, 2013 to Dec 31, 2015). CALENDARAUTO automatically determines the range which may not match your requirements<br>• <strong>YEAR</strong> and <strong>MONTH</strong> — extract year and month from the date<br>• <strong>EOMONTH</strong> (not ENDOFMONTH) — EOMONTH returns a <strong>date value</strong> representing the end of month. ENDOFMONTH returns a <strong>table</strong>, which is not suitable for a calculated column<br><br>Reference: <a href='https://docs.microsoft.com/en-us/dax/calendar-function-dax' target='_blank'>CALENDAR</a> | <a href='https://docs.microsoft.com/en-us/dax/eomonth-function-dax' target='_blank'>EOMONTH</a>",
    category: "DAX",
    tags: ["CALENDAR", "YEAR", "MONTH", "EOMONTH", "Date table", "DAX"]
  },
  {
    id: 331,
    question: "<img src='images/q331-exhibit-1.jpg' alt='Question 331 Exhibit - Sales Data Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q331-exhibit-2.png' alt='Question 331 Exhibit - Column Metadata' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>You plan to develop a Power BI model using the data shown above. You need to perform a <strong>basket analysis</strong> to identify which products are frequently purchased together.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><img src='images/q331-exhibit-3.jpg' alt='Question 331 Exhibit - Answer Area' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Yes, No, No",
      "Yes, Yes, No",
      "No, No, No",
      "Yes, No, Yes"
    ],
    correctAnswer: 0,
    explanation: "<strong>Answer: Yes, No, No</strong><br><br><strong>Statement 1 — Yes:</strong> SalesRowID (unique row ID from source) and AuditID (data load tracking ID) are system columns not needed for basket analysis. Basket analysis requires ProductKey and SalesOrderNumber to identify co-purchased products.<br><br><strong>Statement 2 — No:</strong> OrderDateKey and OrderDate represent the same date information in different formats. Only one is necessary. For basket analysis, the focus is on SalesOrderNumber and ProductKey, not both date columns.<br><br><strong>Statement 3 — No:</strong> TaxAmt is not needed for basket analysis. Basket analysis examines product co-occurrence patterns in transactions, not monetary amounts like tax.",
    category: "Data Modeling",
    tags: ["basket analysis", "column selection", "SalesRowID", "AuditID", "data modeling"]
  },
  {
    id: 332,
    question: "You have a Power BI model that contains a Sales table and a Date table. The Sales table has an active relationship to the Date table on the <strong>OrderDate</strong> column and an inactive relationship on the <strong>ShipDate</strong> column.<br><br>A user requests a report that shows the count of sales by ship date.<br><br>Solution: You create a calculated table that is a copy of the Date table and create an active relationship between the new table and the ShipDate column of the Sales table.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>While creating a calculated table copy of the Date table would technically work, it is <strong>not the recommended approach</strong>. This duplicates data unnecessarily and increases the model size.<br><br>The correct approach is to use <strong>USERELATIONSHIP</strong> in a DAX measure:<br><code>Sales by Ship Date = CALCULATE(COUNTROWS(Sales), USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))</code><br><br>USERELATIONSHIP activates the inactive relationship within the context of a specific calculation without duplicating tables.",
    category: "DAX",
    tags: ["USERELATIONSHIP", "inactive relationship", "calculated table", "ShipDate", "DAX"]
  },
  {
    id: 333,
    question: "You have a Power BI model that contains a Sales table and a Date table. The Sales table has an active relationship to the Date table on the <strong>OrderDate</strong> column and an inactive relationship on the <strong>ShipDate</strong> column.<br><br>A user requests a report that shows the count of sales by ship date.<br><br>Solution: You create a measure that uses <strong>CALCULATE</strong> with <strong>COUNTROWS</strong> and <strong>USERELATIONSHIP</strong>.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>Using <strong>CALCULATE</strong> with <strong>USERELATIONSHIP</strong> is the correct and recommended approach for working with inactive relationships.<br><br>Example measure:<br><code>Sales by Ship Date = CALCULATE(COUNTROWS(Sales), USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))</code><br><br>• CALCULATE modifies the filter context<br>• USERELATIONSHIP activates the inactive relationship for the duration of the calculation<br>• COUNTROWS counts the sales rows<br><br>This avoids duplicating data and is a best practice.",
    category: "DAX",
    tags: ["CALCULATE", "COUNTROWS", "USERELATIONSHIP", "inactive relationship", "DAX"]
  },
  {
    id: 334,
    question: "You have a Power BI model that contains a Sales table and a Date table. The Sales table has an active relationship to the Date table on the <strong>OrderDate</strong> column and an inactive relationship on the <strong>ShipDate</strong> column.<br><br>A user requests a report that shows the count of sales by ship date.<br><br>Solution: You import two copies of the Date table into the model.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Importing two physical copies of the Date table is <strong>not recommended</strong>. This approach:<br><br>• Duplicates data unnecessarily, increasing model size<br>• Creates maintenance overhead (both tables must be kept in sync)<br>• Violates star schema best practices<br><br>The correct approach is to use <strong>USERELATIONSHIP</strong> in a DAX measure to activate the inactive relationship when needed, keeping a single Date table in the model.",
    category: "DAX",
    tags: ["Date table", "inactive relationship", "duplicate data", "model optimization", "USERELATIONSHIP"]
  },
  {
    id: 335,
    question: "Your organization uses Power BI. Users report that they can export data from visuals in Power BI reports. You need to prevent users from exporting data.<br><br>Solution: You remove the users from the <strong>All Users</strong> security group.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Removing users from the All Users security group does not prevent data export from Power BI visuals. The All Users group controls general access, not specific features like data export.<br><br>To prevent data export, you need to modify the <strong>Export data</strong> tenant setting in the Power BI Admin portal under <strong>Tenant settings > Export and sharing settings</strong>.",
    category: "Security & Admin",
    tags: ["export data", "tenant settings", "security group", "admin portal"]
  },
  {
    id: 336,
    question: "Your organization uses Power BI. Users report that they can export data from visuals in Power BI reports. You need to prevent users from exporting data.<br><br>Solution: From the Power BI Admin portal, you modify the <strong>Export data</strong> tenant setting.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>The <strong>Export data</strong> tenant setting in the Power BI Admin portal controls whether users can export data from visuals. By disabling this setting, you prevent users from exporting data.<br><br>Navigate to: <strong>Admin portal > Tenant settings > Export and sharing settings > Export data</strong>.<br><br>You can disable it entirely or restrict it to specific security groups.",
    category: "Security & Admin",
    tags: ["export data", "tenant settings", "admin portal", "Power BI administration"]
  },
  {
    id: 337,
    question: "Your organization uses Power BI. Users report that they can export data from visuals in Power BI reports. You need to prevent users from exporting data.<br><br>Solution: From the Power BI Admin portal, you modify the <strong>Developer settings</strong>.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Developer settings in the Power BI Admin portal control features related to embedding content and API access. They do not control data export from visuals.<br><br>To prevent data export, modify the <strong>Export data</strong> tenant setting under <strong>Export and sharing settings</strong>, not Developer settings.",
    category: "Security & Admin",
    tags: ["Developer settings", "export data", "tenant settings", "admin portal"]
  },
  {
    id: 338,
    question: "Your organization plans to embed Power BI reports in a customer-facing web application. External users who do not have Power BI licenses will need to view the reports.<br><br>Solution: You embed the reports by using an <strong>iFrame</strong> that points to the Power BI service URL.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Using an iFrame that points to the Power BI service URL will not work for external users without Power BI licenses. Users would be prompted to sign in and would need appropriate licenses.<br><br>For embedding reports for external users, you need to use <strong>Power BI Embedded</strong> with the <strong>App Owns Data</strong> pattern and dedicated or Premium capacity.",
    category: "Power BI Service",
    tags: ["embed", "iFrame", "external users", "Power BI Embedded"]
  },
  {
    id: 339,
    question: "Your organization plans to embed Power BI reports in a customer-facing web application. External users who do not have Power BI licenses will need to view the reports.<br><br>Solution: You use <strong>Power BI Embedded</strong> with <strong>shared capacity</strong>.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>Shared capacity does not support embedding for external users. For the <strong>App Owns Data</strong> embedding pattern (embedding for customers without Power BI licenses), you need <strong>dedicated capacity</strong> — either Power BI Embedded (A SKU) or Power BI Premium (P SKU).<br><br>Shared capacity is only suitable for internal embedding where users have their own Power BI Pro licenses.",
    category: "Power BI Service",
    tags: ["Power BI Embedded", "shared capacity", "external users", "dedicated capacity"]
  },
  {
    id: 340,
    question: "Your organization plans to embed Power BI reports in a customer-facing web application. External users who do not have Power BI licenses will need to view the reports.<br><br>Solution: You use <strong>Power BI Embedded</strong> with a <strong>Power BI Premium P1</strong> capacity.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br><strong>Power BI Premium P1</strong> capacity supports the <strong>App Owns Data</strong> embedding pattern, allowing external users without Power BI licenses to view embedded reports.<br><br>Premium P1 provides dedicated capacity for both internal and external embedding. The application authenticates with a service principal or master account, and external users consume the embedded content without needing individual licenses.",
    category: "Power BI Service",
    tags: ["Power BI Embedded", "Premium P1", "external users", "App Owns Data", "dedicated capacity"]
  },
  {
    id: 341,
    question: "You have an Excel workbook that contains Power View sheets with interactive visualizations. You need to migrate the Power View visualizations to Power BI.<br><br>Solution: From Excel, you use <strong>File > Publish > Publish to Power BI</strong> to export the workbook.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>Publishing an Excel workbook with Power View sheets to Power BI converts the Power View sheets into Power BI report pages. The <strong>Publish to Power BI</strong> option uploads the workbook and creates corresponding Power BI visualizations from the Power View content.<br><br>This is a supported method for migrating Power View content to Power BI.",
    category: "Power BI Service",
    tags: ["Power View", "Excel", "Publish to Power BI", "migration"]
  },
  {
    id: 342,
    question: "You have an Excel workbook that contains Power View sheets with interactive visualizations. You need to migrate the Power View visualizations to Power BI.<br><br>Solution: From the Power BI service, you use <strong>Get Data > Files</strong> to import the Excel workbook.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>Importing an Excel workbook with Power View sheets via <strong>Get Data > Files</strong> in the Power BI service will import the workbook content, including Power View sheets, which are converted to Power BI report pages.<br><br>The Power BI service can render Excel Power View content as interactive Power BI reports when the workbook is imported.",
    category: "Power BI Service",
    tags: ["Power View", "Excel", "Get Data", "import", "migration", "Power BI service"]
  },
  {
    id: 343,
    question: "You are preparing data in Power Query Editor. The <strong>CustomerID</strong> column contains error values. You need to ensure that error values in CustomerID are replaced with <strong>null</strong>.<br><br>Solution: You select the CustomerID column and apply <strong>Replace Errors</strong>, entering <strong>null</strong> as the replacement value.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 0,
    explanation: "<strong>Yes</strong><br><br>The <strong>Replace Errors</strong> transform in Power Query replaces error values in the selected column with a specified value. By entering <strong>null</strong> as the replacement value, all error values in the CustomerID column will be replaced with null.<br><br>This generates: <code>Table.ReplaceErrorValues(PreviousStep, {{\"CustomerID\", null}})</code>",
    category: "Power Query",
    tags: ["Replace Errors", "CustomerID", "null", "error handling", "Power Query"]
  },
  {
    id: 344,
    question: "You are preparing data in Power Query Editor. The <strong>CustomerID</strong> column contains error values. You need to ensure that error values in CustomerID are replaced with <strong>null</strong>.<br><br>You open the Advanced Editor and see the following code:<br><br><img src='images/q344-exhibit.png' alt='Question 344 Exhibit - Advanced Editor Code' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Does this code achieve the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br>The code shown is:<br><code>#\"Replaced Errors\" = Table.ReplaceErrorValues(#\"Changed Type\", {{\"CustomerID\", 0}})</code><br><br>This replaces error values with <strong>0</strong>, not <strong>null</strong>. The goal requires replacing errors with null. The correct code would be:<br><code>Table.ReplaceErrorValues(#\"Changed Type\", {{\"CustomerID\", null}})</code><br><br>Replacing with 0 could cause data integrity issues since 0 is a valid CustomerID value.",
    category: "Power Query",
    tags: ["Replace Errors", "Advanced Editor", "Table.ReplaceErrorValues", "CustomerID", "null"]
  },
  {
    id: 345,
    question: "You are preparing data in Power Query Editor. The <strong>CustomerID</strong> column contains error values. You need to ensure that error values in CustomerID are replaced with <strong>null</strong>.<br><br>Solution: You select the CustomerID column and apply <strong>Remove Errors</strong>.<br><br>Does this meet the goal?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "<strong>No</strong><br><br><strong>Remove Errors</strong> removes the <strong>entire row</strong> where the error occurs, rather than replacing the error value with null. This would result in data loss — rows with CustomerID errors would be completely removed from the dataset.<br><br>The correct approach is <strong>Replace Errors</strong> with null as the replacement value, which preserves the rows while replacing only the error values.",
    category: "Power Query",
    tags: ["Remove Errors", "Replace Errors", "CustomerID", "error handling", "Power Query"]
  },
  {
    id: 346,
    question: "<img src='images/q346-exhibit.png' alt='Question 346 Exhibit - Litware Database Schema' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Litware, Inc. uses the database schema shown above. You are building a Power BI report. You need to create a measure that displays the month and year in the format <strong>\"MMM YYYY\"</strong> (e.g., Jan 2020, Feb 2020).<br><br>Which DAX expression should you use?",
    options: [
      "FORMAT('Date'[date], \"MMM YYYY\")",
      "FORMAT('Date'[date], \"MMMM YYYY\")",
      "FORMAT('Date'[month], \"MMM YYYY\")",
      "FORMAT('Date'[date], \"MM YYYY\")"
    ],
    correctAnswer: 0,
    explanation: "<strong>FORMAT('Date'[date], \"MMM YYYY\")</strong><br><br>• <strong>FORMAT</strong> converts a value to text in the specified format<br>• <strong>'Date'[date]</strong> — use the date column (Date data type), not the month column (Integer)<br>• <strong>\"MMM YYYY\"</strong> — MMM gives abbreviated month name (Jan, Feb, Mar...) and YYYY gives four-digit year<br><br>Why not the others:<br>• \"MMMM YYYY\" gives the full month name (January, February), not abbreviated<br>• FORMAT on [month] (Integer) would not produce correct month names since it's just a number<br>• \"MM YYYY\" gives numeric month (01, 02), not abbreviated name",
    category: "DAX",
    tags: ["FORMAT", "DAX", "date formatting", "MMM YYYY", "Litware"]
  },
  {
    id: 347,
    question: "<img src='images/q346-exhibit.png' alt='Question 347 Exhibit - Litware Database Schema' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Litware, Inc. uses the database schema shown above. You are reviewing the data before building the Power BI model. The <strong>sales_amount</strong> column in the Sales table contains some <strong>negative values</strong>.<br><br>What should you do to address this data quality concern?",
    options: [
      "Change the data type of sales_amount from Floating to Integer",
      "Transform the sales_amount column to replace negative values with their absolute values",
      "Remove all rows where sales_amount is negative",
      "Create a calculated column that converts sales_amount to currency format"
    ],
    correctAnswer: 1,
    explanation: "<strong>Transform the sales_amount column to replace negative values with their absolute values</strong><br><br>Negative sales amounts indicate data quality issues (e.g., returns mixed with sales, data entry errors). The best approach is to transform the column to replace negative values with their absolute values using Power Query.<br><br>Why not the others:<br>• Changing to Integer loses decimal precision — sales amounts need decimal values<br>• Removing rows with negative values causes data loss<br>• Converting to currency format is a display change that doesn't fix the underlying negative values",
    category: "Power Query",
    tags: ["data quality", "negative values", "sales_amount", "transform", "Litware"]
  },
  {
    id: 348,
    question: "<img src='images/q348-exhibit-1.png' alt='Question 348 Exhibit - Contoso Projections Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-2.png' alt='Question 348 Exhibit - Contoso Balance Sheet Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-3.png' alt='Question 348 Exhibit - Contoso Date Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Contoso, Ltd. has the data shown above: a Projections table, a Balance sheet table, and a Date dimension table. You need to build a Power BI solution using the <strong>minimum number of datasets</strong>.<br><br>How many imported datasets do you need?",
    options: [
      "One imported dataset",
      "Two imported datasets",
      "Three imported datasets",
      "One imported dataset and one DirectQuery dataset"
    ],
    correctAnswer: 1,
    explanation: "<strong>Two imported datasets</strong><br><br>You need two imported datasets because the Projections and Balance sheet data have <strong>different granularities and structures</strong>:<br><br>• <strong>Dataset 1:</strong> Projections table + Date table — Projections has MonthStartDate which relates to the Date dimension, with ProductCategory and Department dimensions<br>• <strong>Dataset 2:</strong> Balance sheet table + Date table — Balance sheet data has Month/Year fields with AccountCategory/Account dimensions<br><br>Combining them into a single dataset would create an incorrect model due to the different fact table structures and relationships. Each dataset serves a distinct analytical purpose.",
    category: "Data Modeling",
    tags: ["datasets", "import", "Contoso", "Projections", "Balance sheet", "data modeling"]
  },
  {
    id: 349,
    question: "<img src='images/q346-exhibit.png' alt='Question 349 Exhibit - Litware Database Schema' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Litware, Inc. uses the database schema shown above. You need to implement <strong>row-level security (RLS)</strong> so that sales managers can only see sales data for their own region.<br><br>The Sales_Manager table has a <strong>username</strong> column that stores the user's login name. What DAX filter expression should you use in the RLS role?",
    options: [
      "[username] = USERNAME()",
      "[name] = USERNAME()",
      "[sales_manager_id] = USERNAME()",
      "[username] = USERPRINCIPALNAME()"
    ],
    correctAnswer: 0,
    explanation: "<strong>[username] = USERNAME()</strong><br><br>Row-level security (RLS) filters data based on the logged-in user's identity. The <strong>USERNAME()</strong> function returns the current user's login name.<br><br>• The Sales_Manager table has a <strong>username</strong> column that stores login names — so the filter should be on [username]<br>• <strong>USERNAME()</strong> returns the user identity in <code>DOMAIN\\username</code> format<br>• The filter restricts the Sales_Manager table to only the row matching the current user, and through relationships, this filters the Sales data to their region<br><br>• [name] stores the display name, not the login name<br>• [sales_manager_id] is an integer, not a username string",
    category: "Security & Admin",
    tags: ["RLS", "row-level security", "USERNAME", "Sales_Manager", "DAX", "Litware"]
  },
  {
    id: 350,
    question: "<img src='images/q346-exhibit.png' alt='Question 350 Exhibit - Litware Database Schema' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Litware, Inc. uses the database schema shown above. The <strong>Weekly_Returns</strong> table has a <strong>week_id</strong> column (Integer). The <strong>Date</strong> table has a <strong>date_id</strong> column (Integer in YYYYMMDD format) and a <strong>week</strong> column (Integer).<br><br>You need to create a relationship between the Weekly_Returns table and the Date table. What should you do?",
    options: [
      "Create a relationship between Weekly_Returns[week_id] and Date[week]",
      "Create a calculated column in Weekly_Returns that generates a date_id in YYYYMMDD format, then relate it to Date[date_id]",
      "Create a calculated table that aggregates the Date table by week",
      "Create a relationship between Weekly_Returns[week_id] and Date[date_id]"
    ],
    correctAnswer: 1,
    explanation: "<strong>Create a calculated column in Weekly_Returns that generates a date_id in YYYYMMDD format, then relate it to Date[date_id]</strong><br><br>The Weekly_Returns table needs a <strong>date_id</strong> column in YYYYMMDD integer format to match the Date table's date_id column and create a valid relationship.<br><br>Why not the others:<br>• <strong>week_id to week</strong> — The week column in the Date table is not unique (same week number repeats across years), so it cannot be used as the key side of a relationship<br>• <strong>Calculated table</strong> — Aggregating the Date table by week changes the granularity and loses date-level detail<br>• <strong>week_id to date_id</strong> — These columns have different formats and meanings, so a direct relationship would not work",
    category: "Data Modeling",
    tags: ["Weekly_Returns", "Date", "relationship", "calculated column", "date_id", "YYYYMMDD", "Litware"]
  },
  {
    id: 351,
    question: "<img src='images/q346-exhibit.png' alt='Question 351 Exhibit - Litware Database Schema' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Litware, Inc. is an online retailer that uses Power BI. The database schema is shown above. In the Date table, <strong>date_id</strong> has a format of yyyymmdd and <strong>month</strong> has a format of yyyymm. The <strong>week</strong> column and <strong>week_id</strong> have a format of yyyyww.<br><br>The customer service department requires a visual that can be filtered by both <strong>sales month</strong> and <strong>ship month</strong> independently.<br><br>You need to create relationships to meet this requirement. What should you create?",
    options: [
      "An additional date table named ShipDate, a one-to-many relationship from Date[date_id] to Sales[sales_date_id], and a one-to-many relationship from ShipDate[date_id] to Sales[sales_ship_date_id]",
      "An additional date table named ShipDate, a many-to-many relationship from Sales[sales_date_id] to Date[date_id], and a many-to-many relationship from Sales[sales_ship_date_id] to ShipDate[date_id]",
      "A one-to-many relationship from Date[date_id] to Sales[sales_date_id] and another one-to-many relationship from Date[date_id] to Weekly_Returns[week_id]",
      "A one-to-many relationship from Sales[sales_date_id] to Date[date_id] and a one-to-many relationship from Sales[sales_ship_date_id] to Date[date_id]"
    ],
    correctAnswer: 0,
    explanation: "<strong>An additional date table named ShipDate with two one-to-many relationships</strong><br><br>The customer service department needs to filter by both sales month and ship month <strong>independently</strong>. In Power BI, only one active relationship can exist between two tables.<br><br>The solution is to:<br>1. Create an additional Date table named <strong>ShipDate</strong><br>2. Create a <strong>one-to-many</strong> relationship from Date[date_id] to Sales[sales_date_id] (for sales month filtering)<br>3. Create a <strong>one-to-many</strong> relationship from ShipDate[date_id] to Sales[sales_ship_date_id] (for ship month filtering)<br><br>Why not the others:<br>• <strong>Many-to-many</strong> relationships are not needed here — each date_id is unique in the Date table, so one-to-many is correct<br>• <strong>Option C</strong> — Cannot relate date_id to week_id as they have different formats (yyyymmdd vs yyyyww)<br>• <strong>Option D</strong> — The relationship direction is wrong; the one side must be the Date table (unique keys), not Sales<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand' target='_blank'>Relationships in Power BI</a>",
    category: "Data Modeling",
    tags: ["relationships", "ShipDate", "one-to-many", "role-playing dimension", "independent filter", "Litware"]
  },
  {
    id: 352,
    question: "<img src='images/q348-exhibit-1.png' alt='Question 352 Exhibit - Contoso Projections Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-2.png' alt='Question 352 Exhibit - Contoso Balance Sheet Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-3.png' alt='Question 352 Exhibit - Contoso Date Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Contoso, Ltd. is a manufacturing company. The balance sheet data is imported with final balances for each account per month. The balance sheet is related to a standard Date table based on the last day of the month.<br><br>At least one of the balance sheet reports must show the <strong>ending balances for the quarter</strong>, as well as for the previous quarter.<br><br>Which DAX expression should you use to get the ending balances in the balance sheet reports?",
    options: [
      "CALCULATE ( SUM( BalanceSheet[BalanceAmount] ), DATESQTD( 'Date'[Date] ) )",
      "CALCULATE ( SUM( BalanceSheet[BalanceAmount] ), LASTDATE( 'Date'[Date] ) )",
      "FIRSTNONBLANK ( 'Date'[Date], SUM( BalanceSheet[BalanceAmount] ) )",
      "CALCULATE ( MAX( BalanceSheet[BalanceAmount] ), LASTDATE( 'Date'[Date] ) )"
    ],
    correctAnswer: 0,
    explanation: "<strong>CALCULATE ( SUM( BalanceSheet[BalanceAmount] ), DATESQTD( 'Date'[Date] ) )</strong><br><br><strong>DATESQTD</strong> returns a table containing a column of dates for the <strong>quarter to date</strong> in the current context. This is the correct function for showing ending balances for the quarter.<br><br>Since there is always a row for each account for each month, DATESQTD will include all months up to the current point in the quarter. When viewed at quarter level, it sums all monthly balances within the quarter — giving the ending balance for the quarter.<br><br>Why not the others:<br>• <strong>LASTDATE</strong> — Returns only the last date in the current context, which would only give the last month's balance, not the quarter total<br>• <strong>FIRSTNONBLANK</strong> — Returns the first date with a non-blank value, not useful for ending balances<br>• <strong>MAX(BalanceAmount)</strong> — Takes the maximum balance rather than summing, which is incorrect logic for balance sheets<br><br>Reference: <a href='https://docs.microsoft.com/en-us/dax/datesqtd-function-dax' target='_blank'>DATESQTD function</a>",
    category: "DAX",
    tags: ["CALCULATE", "DATESQTD", "balance sheet", "ending balance", "DAX", "Contoso"]
  },
  {
    id: 353,
    question: "<img src='images/q348-exhibit-1.png' alt='Question 353 Exhibit - Contoso Projections Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-2.png' alt='Question 353 Exhibit - Contoso Balance Sheet Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-3.png' alt='Question 353 Exhibit - Contoso Date Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Contoso, Ltd. is a manufacturing company. The balance sheet data is imported with final balances for each account per month. You plan to relate the balance sheet to a standard Date table in Power BI in a many-to-one relationship based on the <strong>last day of the month</strong>.<br><br>You need to calculate the last day of the month in the balance sheet data to ensure that you can relate the balance sheet data to the Date table.<br><br>Which type of calculation and which formula should you use?<br><br><img src='images/q353-exhibit.png' alt='Question 353 Exhibit - Answer Area' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "An M custom column — Date.EndOfMonth(#date([Year], [Month], 1))",
      "A DAX calculated column — Date.EndOfMonth(#date([Year], [Month], 1))",
      "An M custom column — Date.EndOfQuarter(#date([Year], [Month], 1))",
      "A DAX calculated measure — ENDOFQUARTER(DATE('BalanceSheet'[Year],BalanceSheet[Month],1),0)"
    ],
    correctAnswer: 0,
    explanation: "<strong>An M custom column — Date.EndOfMonth(#date([Year], [Month], 1))</strong><br><br><strong>Type: An M custom column</strong><br>The balance sheet has Month (Integer, e.g., 3) and Year (Integer, e.g., 2020) columns. We need to compute the last day of the month <strong>during data transformation</strong> (Power Query / M language), not after import.<br><br><strong>Formula: Date.EndOfMonth(#date([Year], [Month], 1))</strong><br>• <code>#date([Year], [Month], 1)</code> — creates a date from the Year and Month columns (1st of the month)<br>• <code>Date.EndOfMonth()</code> — returns the last day of that month<br><br>Why not the others:<br>• <strong>DAX calculated column</strong> with M syntax — Date.EndOfMonth is an M function, not DAX. You cannot use M syntax in a DAX calculated column<br>• <strong>Date.EndOfQuarter</strong> — Returns the last day of the quarter, not the month. The requirement is for the last day of the <strong>month</strong><br>• <strong>ENDOFQUARTER DAX measure</strong> — Returns a quarter-end date, not month-end, and uses incorrect syntax",
    category: "Power Query",
    tags: ["M custom column", "Date.EndOfMonth", "balance sheet", "Power Query", "Contoso"]
  },
  {
    id: 354,
    question: "<img src='images/q346-exhibit.png' alt='Question 354 Exhibit - Litware Database Schema' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Litware, Inc. is an online retailer that uses Power BI. The sales managers require a visual to analyze <strong>sales performance versus sales targets</strong>.<br><br>You need to create a visualization to meet the reporting requirements of the sales managers. How should you create the visualization?<br><br><img src='images/q354-exhibit.png' alt='Question 354 Exhibit - Answer Area' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Visualization type: KPI — Indicator: Sales[sales_amount] — Trend axis: Date[month] — Target goals: Targets[sales_target]",
      "Visualization type: Gauge — Indicator: Sales[sales_amount] — Trend axis: Date[month] — Target goals: Targets[sales_target]",
      "Visualization type: KPI — Indicator: Sales[sales_id] — Trend axis: Date[month] — Target goals: Targets[sales_target]",
      "Visualization type: Card — Indicator: Sales[sales_amount] — Trend axis: Date[month] — Target goals: Targets[sales_target]"
    ],
    correctAnswer: 0,
    explanation: "<strong>KPI — Sales[sales_amount] — Date[month] — Targets[sales_target]</strong><br><br><strong>Visualization type: KPI</strong><br>A Key Performance Indicator (KPI) visual is designed to compare actual performance against a target — perfect for sales performance vs. sales targets.<br><br><strong>Indicator: Sales[sales_amount]</strong><br>The indicator (value) field shows the actual sales amount being tracked.<br><br><strong>Trend axis: Date[month]</strong><br>The trend axis shows how the KPI tracks over time by month.<br><br><strong>Target goals: Targets[sales_target]</strong><br>The target goals field defines what we're measuring performance against.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi' target='_blank'>KPI visuals in Power BI</a>",
    category: "Visualization",
    tags: ["KPI", "visualization", "sales_amount", "sales_target", "Litware"]
  },
  {
    id: 355,
    question: "<img src='images/q346-exhibit.png' alt='Question 355 Exhibit - Litware Database Schema' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Litware, Inc. is an online retailer that uses Power BI. The sales managers require a visual to analyze <strong>sales performance versus sales targets</strong>.<br><br>You need to create a KPI visualization to meet the reporting requirements. How should you configure the KPI?<br><br><img src='images/q355-exhibit.jpg' alt='Question 355 Exhibit - Answer Area' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Indicator: Sales[sales_amount] — Trend axis: Date[month] — Target goals: Targets[sales_target]",
      "Indicator: Targets[sales_target] — Trend axis: Date[month] — Target goals: Sales[sales_amount]",
      "Indicator: Sales[sales_amount] — Trend axis: Sales[sales_id] — Target goals: Targets[sales_target]",
      "Indicator: Date[month] — Trend axis: Sales[sales_amount] — Target goals: Targets[sales_target]"
    ],
    correctAnswer: 0,
    explanation: "<strong>Indicator: Sales[sales_amount] — Trend axis: Date[month] — Target goals: Targets[sales_target]</strong><br><br><strong>Indicator: Sales[sales_amount]</strong><br>The indicator represents the actual value being measured — in this case, total sales amount.<br><br><strong>Trend axis: Date[month]</strong><br>The trend axis shows the performance trend over time. Using Date[month] displays monthly trends.<br><br><strong>Target goals: Targets[sales_target]</strong><br>The target goals represent the benchmark against which actual sales are compared.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi' target='_blank'>KPI visuals in Power BI</a>",
    category: "Visualization",
    tags: ["KPI", "Indicator", "Trend axis", "Target goals", "sales performance", "Litware"]
  },
  {
    id: 356,
    question: "<img src='images/q348-exhibit-1.png' alt='Question 356 Exhibit - Contoso Projections Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-2.png' alt='Question 356 Exhibit - Contoso Balance Sheet Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-3.png' alt='Question 356 Exhibit - Contoso Date Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Contoso, Ltd. is a manufacturing company. Revenue projections are set at the monthly level and summed to show projections for the quarter.<br><br>You need to create a DAX measure in the data model that only allows users to see projections at the appropriate level of granularity.<br><br>How should you complete the measure?<br><br><code>RevenueProjection = <strong>[Box 1]</strong>( <strong>[Box 2]</strong>( Projections[ProductCategory] ), BLANK(), <strong>[Box 3]</strong>( Projections[Projection] ) )</code>",
    options: [
      "Box 1: IF — Box 2: ISFILTERED — Box 3: SUM",
      "Box 1: SWITCH — Box 2: ISFILTERED — Box 3: SUM",
      "Box 1: IF — Box 2: HASONEVALUE — Box 3: AVERAGE",
      "Box 1: IF — Box 2: ISCROSSFILTERED — Box 3: SUM"
    ],
    correctAnswer: 0,
    explanation: "<strong>IF — ISFILTERED — SUM</strong><br><br>The complete measure:<br><code>RevenueProjection = IF( ISFILTERED( Projections[ProductCategory] ), BLANK(), SUM( Projections[Projection] ) )</code><br><br><strong>Box 1: IF</strong><br>IF is used for conditional logic — show BLANK() when filtered at wrong granularity, otherwise show the SUM.<br><br><strong>Box 2: ISFILTERED</strong><br>ISFILTERED returns TRUE when a column is being <strong>directly filtered</strong>. Since projections are at the monthly level (not at ProductCategory level), the measure should return BLANK() when ProductCategory is filtered — preventing users from seeing projections broken down below their actual granularity.<br><br><strong>Box 3: SUM</strong><br>SUM totals the projection amounts. Revenue projections are summed to show quarterly totals.<br><br>Reference: <a href='https://docs.microsoft.com/en-us/dax/isfiltered-function-dax' target='_blank'>ISFILTERED function</a>",
    category: "DAX",
    tags: ["IF", "ISFILTERED", "SUM", "DAX measure", "granularity", "projections", "Contoso"]
  },
  {
    id: 357,
    question: "<img src='images/q348-exhibit-1.png' alt='Question 357 Exhibit - Contoso Projections Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-2.png' alt='Question 357 Exhibit - Contoso Balance Sheet Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-3.png' alt='Question 357 Exhibit - Contoso Date Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Contoso, Ltd. is a manufacturing company. At least one of the balance sheet reports must show the <strong>ending balances for the quarter</strong>, as well as for the <strong>previous quarter</strong>. The board must be able to see <strong>changes in long-term liabilities from the previous quarter</strong>.<br><br>Which <strong>two</strong> types of visualizations can be used in the balance sheet reports to meet the reporting goals? (Choose two.)",
    options: [
      "A line chart that shows balances by quarter filtered to account categories that are long-term liabilities",
      "A clustered column chart that shows balances by date (x-axis) and account category (legend) without filters",
      "A clustered column chart that shows balances by quarter filtered to account categories that are long-term liabilities",
      "A pie chart that shows balances by account category without filters",
      "A ribbon chart that shows balances by quarter and accounts in the legend"
    ],
    correctAnswer: [0, 2],
    multiSelect: true,
    explanation: "<strong>A line chart (filtered to long-term liabilities) AND a clustered column chart (filtered to long-term liabilities)</strong><br><br>The requirement is to show <strong>changes in long-term liabilities from the previous quarter</strong>. Both of these visualizations meet this goal:<br><br>• <strong>Line chart by quarter filtered to long-term liabilities</strong> — Shows the trend of long-term liability balances across quarters, making it easy to see changes<br>• <strong>Clustered column chart by quarter filtered to long-term liabilities</strong> — Shows quarterly balances side by side, enabling comparison of current vs. previous quarter<br><br>Why not the others:<br>• <strong>Clustered column by date without filters</strong> — Shows all account categories at daily granularity, too detailed and not focused on long-term liabilities<br>• <strong>Pie chart without filters</strong> — Shows a single snapshot proportion, cannot show changes over time between quarters<br>• <strong>Ribbon chart</strong> — While it shows data over time, it shows all accounts (not filtered to long-term liabilities) which doesn't directly meet the specific requirement",
    category: "Visualization",
    tags: ["visualization", "balance sheet", "long-term liabilities", "line chart", "clustered column chart", "Contoso"]
  },
  {
    id: 358,
    question: "<img src='images/q348-exhibit-1.png' alt='Question 358 Exhibit - Contoso Projections Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-2.png' alt='Question 358 Exhibit - Contoso Balance Sheet Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-3.png' alt='Question 358 Exhibit - Contoso Date Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Contoso, Ltd. wants to provide a single package of reports to the board that contains custom navigation and links to supplementary information. A mail-enabled security group will be used to share information with the board.<br><br>How should you distribute the reports to the board?<br><br><img src='images/q358-exhibit.png' alt='Question 358 Exhibit - Answer Area' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Grant access by: Using a workspace membership — Grant access to: A mail-enabled security group",
      "Grant access by: Using an app — Grant access to: A mail-enabled security group",
      "Grant access by: Sharing individual reports — Grant access to: Individual user emails",
      "Grant access by: Using a workspace membership — Grant access to: A dynamic distribution list"
    ],
    correctAnswer: 0,
    explanation: "<strong>Grant access by: Using a workspace membership — Grant access to: A mail-enabled security group</strong><br><br><strong>Using a workspace membership:</strong><br>A workspace is a shared environment for a group of people. It can contain multiple Power BI content items (dashboards, reports, datasets). This meets the requirement of providing a <strong>single package of reports</strong> with custom navigation and links to supplementary information.<br><br><strong>A mail-enabled security group:</strong><br>The security requirements explicitly state that a <strong>mail-enabled security group</strong> will be used to share information with the board. This minimizes maintenance — when board membership changes, you only update the security group.<br><br>Why not the others:<br>• <strong>Using an app</strong> — While apps can package reports, workspace membership is more appropriate for this scenario<br>• <strong>Individual user emails</strong> — Does not meet the requirement of using a security group and increases maintenance<br>• <strong>Dynamic distribution list</strong> — The requirement specifically calls for a mail-enabled security group",
    category: "Security & Admin",
    tags: ["workspace", "security group", "distribution", "board reports", "Contoso"]
  },
  {
    id: 359,
    question: "<img src='images/q348-exhibit-1.png' alt='Question 359 Exhibit - Contoso Projections Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-2.png' alt='Question 359 Exhibit - Contoso Balance Sheet Data' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br><img src='images/q348-exhibit-3.png' alt='Question 359 Exhibit - Contoso Date Table' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'><br><br>Contoso, Ltd. needs to grant access to the business unit analysts. The analysts must see all the data the board sees, except profit and loss data (restricted to their business unit). The analysts must be able to <strong>build new reports</strong> from the profit and loss dataset but must not be included in the quarterly board reports. The analysts must not be able to share the reports.<br><br>What should you configure?<br><br><img src='images/q359-exhibit.jpg' alt='Question 359 Exhibit - Answer Area' style='max-width:100%;border-radius:8px;margin:12px 0;box-shadow:0 2px 8px rgba(0,0,0,0.15);'>",
    options: [
      "Permissions in powerbi.com: The Viewer role to the workspace — Permissions for profit and loss dataset: Build",
      "Permissions in powerbi.com: The Member role to the workspace — Permissions for profit and loss dataset: Build",
      "Permissions in powerbi.com: The Viewer role to the workspace — Permissions for profit and loss dataset: Reshare",
      "Permissions in powerbi.com: Access permissions to an app — Permissions for profit and loss dataset: Delete"
    ],
    correctAnswer: 0,
    explanation: "<strong>The Viewer role to the workspace — Build permission for the profit and loss dataset</strong><br><br><strong>The Viewer role to the workspace:</strong><br>The Viewer role provides read-only access to workspace content. Analysts can view dashboards and reports but <strong>cannot share</strong> the quarterly reports — meeting the requirement that analysts must not be able to share.<br><br><strong>Build permission for the profit and loss dataset:</strong><br>The <strong>Build</strong> permission allows analysts to create new reports from the dataset. This meets the requirement that analysts must be able to <strong>build new reports</strong> from the profit and loss data. Any reports they build will be in their own workspace, <strong>not included</strong> in the quarterly reports for the board.<br><br>Why not the others:<br>• <strong>Member role</strong> — Would allow analysts to edit and share content, violating the no-sharing requirement<br>• <strong>Reshare</strong> — Would allow analysts to share the dataset, not needed and increases risk<br>• <strong>Delete</strong> — Would allow analysts to delete the dataset, which is destructive and inappropriate<br><br>Reference: <a href='https://www.nickyvv.com/2019/08/the-new-power-bi-workspace-viewer-role-explained.html' target='_blank'>Power BI workspace Viewer role</a>",
    category: "Security & Admin",
    tags: ["Viewer role", "Build permission", "workspace", "dataset permissions", "analyst access", "Contoso"]
  },
];
