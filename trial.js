function getModalBodyContent(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return "";
        const body = modal.querySelector(".modal-body");
        return body ? body.innerHTML : "";
    }

    function hideComparison() {
        document.getElementById("comparisonArea").classList.add("hidden"); 
        document.getElementById("closeCompareArea").style.display = "none";
    }

    document.getElementById("compareButton").addEventListener("click", function () {
        const cluster1 = document.getElementById("clusterSelect1").value;
        const cluster2 = document.getElementById("clusterSelect2").value;

        if (!cluster1 || !cluster2) {
            alert("2つのクラスタを選択してください。");
            return;
        }

        const content1 = getModalBodyContent(cluster1);
        const content2 = getModalBodyContent(cluster2);

        const comparisonArea = document.getElementById("comparisonArea");
        comparisonArea.innerHTML = `
            <div class="card p-3 flex-fill shadow-sm" style="max-width: 50%;">
                ${content1}
            </div>
            <div class="card p-3 flex-fill shadow-sm" style="max-width: 50%;">
                ${content2}
            </div>
        `;
        // 表示時
        comparisonArea.classList.remove("hidden");
        document.getElementById("closeCompareArea").style.display = "block";
    });