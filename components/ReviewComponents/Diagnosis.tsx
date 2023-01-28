import React from "react";

export default function Diagnosis() {
  return (
    <div className="analytics-card" id="Diagnosis">
      {/* Diagnosis */}
      <div className="text-xl text-white font-semibold mt-2 my-2">
        Diagnosis Report{" "}
      </div>
      <div className="flex flex-wrap mb-2 mx-1">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Provisional diagnosis:
          </label>
          <p className="analytics-TextBox max-h-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum commodo leo, vel molestie velit tincidunt imperdiet. Ut
            cursus libero nisl. Proin sit amet lobortis dolor, ac efficitur
            diam. Vestibulum sit amet elit id est sollicitudin commodo hendrerit
            sed nisl. Donec ut placerat sem. Phasellus vel augue viverra,
            efficitur lacus quis, congue nisi. Mauris posuere condimentum nisi.
            Ut tristique lobortis est, in vulputate justo hendrerit vel. Donec
            vehicula facilisis iaculis.{" "}
          </p>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Final diagnosis:
          </label>
          <p className="analytics-TextBox max-h-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum commodo leo, vel molestie velit tincidunt imperdiet. Ut
            cursus libero nisl. Proin sit amet lobortis dolor, ac efficitur
            diam. Vestibulum sit amet elit id est sollicitudin commodo hendrerit
            sed nisl. Donec ut placerat sem. Phasellus vel augue viverra,
            efficitur lacus quis, congue nisi. Mauris posuere condimentum nisi.
            Ut tristique lobortis est, in vulputate justo hendrerit vel. Donec
            vehicula facilisis iaculis.{" "}
          </p>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Syndromic diagnosis:{" "}
            <span className="bg-slate-300 text-slate-800 p-1 capitalize">
              Definite
            </span>
          </label>
          <p className="analytics-TextBox max-h-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            fermentum commodo leo, vel molestie velit tincidunt imperdiet. Ut
            cursus libero nisl. Proin sit amet lobortis dolor, ac efficitur
            diam. Vestibulum sit amet elit id est sollicitudin commodo hendrerit
            sed nisl. Donec ut placerat sem. Phasellus vel augue viverra,
            efficitur lacus quis, congue nisi. Mauris posuere condimentum nisi.
            Ut tristique lobortis est, in vulputate justo hendrerit vel. Donec
            vehicula facilisis iaculis.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
