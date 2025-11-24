"use client";
const logs = [
  {
    time: "01:23 AM",
    type: "Complaint Logged",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#EAB919" fillOpacity="0.12" />
      <g clipPath="url(#clip0_139_16175)">
        <path
          d="M12 9.33301V11.9997M12 14.6663H12.0067M5.33333 9.6815V14.3178C5.33333 14.4809 5.33333 14.5624 5.35175 14.6392C5.36808 14.7072 5.39502 14.7722 5.43157 14.8319C5.4728 14.8991 5.53045 14.9568 5.64575 15.0721L8.92758 18.3539C9.04288 18.4692 9.10053 18.5269 9.16781 18.5681C9.22746 18.6047 9.29249 18.6316 9.36051 18.6479C9.43724 18.6663 9.51877 18.6663 9.68183 18.6663H14.3182C14.4812 18.6663 14.5628 18.6663 14.6395 18.6479C14.7075 18.6316 14.7725 18.6047 14.8322 18.5681C14.8995 18.5269 14.9571 18.4692 15.0724 18.3539L18.3542 15.0721C18.4695 14.9568 18.5272 14.8991 18.5684 14.8319C18.605 14.7722 18.6319 14.7072 18.6482 14.6392C18.6667 14.5624 18.6667 14.4809 18.6667 14.3178V9.6815C18.6667 9.51844 18.6667 9.43691 18.6482 9.36019C18.6319 9.29216 18.605 9.22713 18.5684 9.16748C18.5272 9.10021 18.4695 9.04256 18.3542 8.92726L15.0724 5.64543C14.9571 5.53013 14.8995 5.47248 14.8322 5.43125C14.7725 5.3947 14.7075 5.36776 14.6395 5.35143C14.5628 5.33301 14.4812 5.33301 14.3182 5.33301H9.68183C9.51877 5.33301 9.43724 5.33301 9.36051 5.35143C9.29249 5.36776 9.22746 5.3947 9.16781 5.43125C9.10053 5.47248 9.04288 5.53013 8.92758 5.64543L5.64575 8.92726C5.53045 9.04256 5.4728 9.10021 5.43157 9.16748C5.39502 9.22713 5.36808 9.29216 5.35175 9.36019C5.33333 9.43691 5.33333 9.51844 5.33333 9.6815Z"
          stroke="#EAB919"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_139_16175">
          <rect width={16} height={16} fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
    ,
    author: "Alex Will",
    description:
      "On 10 September 2025, our team received a shipment of 50 units of ceramic floor tiles from the supplier. Upon inspection, we discovered that all 50 units were either cracked, chipped, or otherwise damaged during transit. The packaging appeared insufficient to protect the items, and several boxes showed signs of rough handling. This issue has delayed the ongoing renovation project and requires an urgent replacement or credit adjustment. Supporting images have been uploaded for verification.",
  },
  {
    time: "01:23 AM",
    type: "Added note",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#4EC483" fillOpacity="0.12" />
      <g clipPath="url(#clip0_139_16184)">
        <path
          d="M9 11.9997L11 13.9997L15 9.99967M18.6667 11.9997C18.6667 15.6816 15.6819 18.6663 12 18.6663C8.3181 18.6663 5.33333 15.6816 5.33333 11.9997C5.33333 8.31778 8.3181 5.33301 12 5.33301C15.6819 5.33301 18.6667 8.31778 18.6667 11.9997Z"
          stroke="#4EC483"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_139_16184">
          <rect width={16} height={16} fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
    ,
    author: "Alex Will",
    description: "Supplier acknowledged issue and requested photos for verification",
  },
  {
    time: "01:23 AM",
    type: "Added negotiation note",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#E1F930" fillOpacity="0.12" />
      <path
        d="M6 9.2C6 8.07989 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799C7.51984 6 8.0799 6 9.2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.07989 18 9.2V12.8C18 13.9201 18 14.4802 17.782 14.908C17.5903 15.2843 17.2843 15.5903 16.908 15.782C16.4802 16 15.9201 16 14.8 16H13.1225C12.7065 16 12.4984 16 12.2995 16.0408C12.123 16.0771 11.9521 16.137 11.7917 16.219C11.6108 16.3114 11.4483 16.4413 11.1235 16.7012L9.53317 17.9735C9.25578 18.1954 9.11708 18.3063 9.00036 18.3065C8.89885 18.3066 8.80282 18.2604 8.73949 18.1811C8.66667 18.0898 8.66667 17.9122 8.66667 17.557V16C8.04669 16 7.7367 16 7.48236 15.9319C6.79218 15.7469 6.25308 15.2078 6.06815 14.5176C6 14.2633 6 13.9533 6 13.3333V9.2Z"
        stroke="#F4EC00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    ,
    author: "Alex Will",
    description: "Supplier acknowledged issue and requested photos for verification",
  },
  {
    time: "01:23 AM",
    type: "Uploaded file — Proforma Invoice.pdf",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#B2BEC9" fillOpacity="0.12" />
      <path
        d="M6.66667 18L6.66667 6.66667M6.66667 12.6667H11.6C11.9734 12.6667 12.1601 12.6667 12.3027 12.594C12.4281 12.5301 12.5301 12.4281 12.594 12.3027C12.6667 12.1601 12.6667 11.9734 12.6667 11.6V7.06667C12.6667 6.6933 12.6667 6.50661 12.594 6.36401C12.5301 6.23856 12.4281 6.13658 12.3027 6.07266C12.1601 6 11.9734 6 11.6 6H7.73333C7.35997 6 7.17328 6 7.03067 6.07266C6.90523 6.13658 6.80325 6.23856 6.73933 6.36401C6.66667 6.50661 6.66667 6.6933 6.66667 7.06667V12.6667ZM12.6667 7.33333H16.9333C17.3067 7.33333 17.4934 7.33333 17.636 7.406C17.7614 7.46991 17.8634 7.5719 17.9273 7.69734C18 7.83995 18 8.02663 18 8.4V12.9333C18 13.3067 18 13.4934 17.9273 13.636C17.8634 13.7614 17.7614 13.8634 17.636 13.9273C17.4934 14 17.3067 14 16.9333 14H13.7333C13.36 14 13.1733 14 13.0307 13.9273C12.9052 13.8634 12.8032 13.7614 12.7393 13.636C12.6667 13.4934 12.6667 13.3067 12.6667 12.9333V7.33333Z"
        stroke="#B2BEC9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    ,
    author: "Alex Will",
  },
  {
    time: "01:23 AM",
    type: "Uploaded file — Proforma Invoice.pdf",
    icon: <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={24} rx={12} fill="#B2BEC9" fillOpacity="0.12" />
      <path
        d="M6.66667 18L6.66667 6.66667M6.66667 12.6667H11.6C11.9734 12.6667 12.1601 12.6667 12.3027 12.594C12.4281 12.5301 12.5301 12.4281 12.594 12.3027C12.6667 12.1601 12.6667 11.9734 12.6667 11.6V7.06667C12.6667 6.6933 12.6667 6.50661 12.594 6.36401C12.5301 6.23856 12.4281 6.13658 12.3027 6.07266C12.1601 6 11.9734 6 11.6 6H7.73333C7.35997 6 7.17328 6 7.03067 6.07266C6.90523 6.13658 6.80325 6.23856 6.73933 6.36401C6.66667 6.50661 6.66667 6.6933 6.66667 7.06667V12.6667ZM12.6667 7.33333H16.9333C17.3067 7.33333 17.4934 7.33333 17.636 7.406C17.7614 7.46991 17.8634 7.5719 17.9273 7.69734C18 7.83995 18 8.02663 18 8.4V12.9333C18 13.3067 18 13.4934 17.9273 13.636C17.8634 13.7614 17.7614 13.8634 17.636 13.9273C17.4934 14 17.3067 14 16.9333 14H13.7333C13.36 14 13.1733 14 13.0307 13.9273C12.9052 13.8634 12.8032 13.7614 12.7393 13.636C12.6667 13.4934 12.6667 13.3067 12.6667 12.9333V7.33333Z"
        stroke="#B2BEC9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    ,
    author: "Alex Will",
  },
];

export default function  ClientLogs() {
  return (
    <>
      <h2 className="text-lg font-medium text-gray-900">Supplier Logs</h2>
      <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
      <div className="overflow-auto max-h-[calc(100vh-534px)] p-4">

        <p className="text-sm text-gray-500 mb-6">Aug 20, 2022 – Today</p>

        <div className="relative border-l border-gray-200">
          {logs.map((log, index) => (
            <div key={index} className="mb-8 ml-6 relative">
              {/* Timeline dot */}
              <span className="absolute -left-[37px] top-2">
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width={24}
                    height={24}
                    rx={12}
                    fill="#355E5B"
                    fillOpacity="0.32"
                  />
                  <circle cx="12.5" cy={12} r={8} fill="#355E5B" fillOpacity="0.9" />
                </svg>

              </span>

              {/* Time */}
              <p className="text-xs text-gray-500 mb-2">{log.time}</p>

              {/* Card */}
              <div className="border border-[#EAECF0] rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-2 mb-1 bg-[#FAFAFA] p-2 border border-[#EAECF0A3] rounded mb-4">
                  {log.icon}
                  <span className="text-[14px] font-medium text-[#202E2DA8]">{log.type}</span>
                </div>
                <p className="text-[14px] text-[202E2D99] mb-2">By {log.author}</p>
                {log.description && (
                  <p className="text-sm text-[#202E2D99] leading-relaxed">{log.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
