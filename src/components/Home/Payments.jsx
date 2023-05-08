import React from "react";
import { Tag, KIND, VARIANT } from "baseui/tag";

const Payments = () => {
  return (
    <div className="mt-10">
      <h2 className="text-[24px] pl-4 leading-[32.78px]">
        Payments and Disbursement Notes
      </h2>

      <div className="px-3 py-6 mt-4 shadow-[4px_4px_20px_rgba(151,151,151,0.25)] rounded-xl">
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <p className="text-[12px] text-[#333333]">Payment date</p>
            <p className="text-[16px]">27 Mar 2023</p>
          </div>
          <div className="space-y-2">
            <p className="text-[12px] text-[#333333]">Amount</p>
            <p className="text-[16px]">INR 12,345</p>
          </div>
          <div className="space-y-2">
            <p className="text-[12px] text-[#333333]">Items</p>
            <p className="text-[16px]">
              Moodboard design, month 1 retainer costs
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[12px] text-[#333333]">
              Disbursement report (click to see)
            </p>
            <p className="text-[16px] text-[#276EF1] underline">
              MFDN-12345678
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-[24px] pl-4 leading-[32.78px] font-semibold">
          Invoices
        </h3>
        <p className="text-[16px] mt-1 pl-4 text-[#666666] leading-[21.79px]">
          Proforma invoice and Invoice are sent to the client on your behalf
          automatically
        </p>

        <div className="px-3 py-6 mt-3 shadow-[4px_4px_20px_rgba(151,151,151,0.25)]">
          <div className="grid grid-cols-6 gap-3 md:gap-4 mb-3">
            <p className="text-xs text-[#333333]">Items</p>
            <p className="text-xs text-[#333333]">Proforma invoice</p>
            <p className="text-xs text-[#333333]">Proforma invoice Date</p>
            <p className="text-xs text-[#333333]">Status</p>
            <p className="text-xs text-[#333333]">Invoice</p>
            <p className="text-xs text-[#333333]">Invoice Date</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-6 gap-3 md:gap-4 border-b-2 border-gray-200 pb-2 text-xs md:text-base">
              <p>Moodboard design, month 1 retainer costs</p>
              <p className="text-[#276EF1]">MFPI-12345678</p>
              <p>12 Apr 2023</p>
              <Tag
                closeable={false}
                variant={VARIANT.solid}
                kind={KIND.custom}
                color="#666666"
              >
                Payment pending
              </Tag>
              <p>-</p>
              <p>-</p>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-4 border-b-2 border-gray-200 pb-2 text-xs md:text-base">
              <p>Moodboard design, month 1 retainer costs</p>
              <p className="text-[#276EF1]">MFPI-12345678</p>
              <p>12 Apr 2023</p>
              <Tag
                closeable={false}
                variant={VARIANT.solid}
                kind={KIND.positive}
              >
                Payment collected
              </Tag>
              <p className="text-[#276EF1]">MFIN-12345678</p>
              <p>27 Mar 2023</p>
            </div>
          </div>
          <p className="text-[14px] text-[#666666] mt-3">
            Understand the meaning of statuses and how the payments work.{" "}
            <span className="underline">Click here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
