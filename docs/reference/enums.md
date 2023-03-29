---
id: enums
title: Enums
slug: enums
sidebar_position: 6
---

## Alg



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>EdDSA</td>
<td>

</td>
</tr>
</tbody>
</table>

## Crv



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>Ed25519</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncomingPaymentState



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>PENDING</td>
<td>
<p>The payment has a state of PENDING when it is initially created.</p>
</td>
</tr>
<tr>
<td>PROCESSING</td>
<td>
<p>As soon as payment has started (funds have cleared into the account) the state moves to PROCESSING</p>
</td>
</tr>
<tr>
<td>COMPLETED</td>
<td>
<p>The payment is either auto-completed once the received amount equals the expected <code>incomingAmount</code>, or it is completed manually via an API call.</p>
</td>
</tr>
<tr>
<td>EXPIRED</td>
<td>
<p>If the payment expires before it is completed then the state will move to EXPIRED and no further payments will be accepted.</p>
</td>
</tr>
</tbody>
</table>

## Kty



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>OKP</td>
<td>

</td>
</tr>
</tbody>
</table>

## LiquidityError



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>AlreadyPosted</td>
<td>

</td>
</tr>
<tr>
<td>AlreadyVoided</td>
<td>

</td>
</tr>
<tr>
<td>AmountZero</td>
<td>

</td>
</tr>
<tr>
<td>InsufficientBalance</td>
<td>

</td>
</tr>
<tr>
<td>InvalidId</td>
<td>

</td>
</tr>
<tr>
<td>TransferExists</td>
<td>

</td>
</tr>
<tr>
<td>UnknownAsset</td>
<td>

</td>
</tr>
<tr>
<td>UnknownIncomingPayment</td>
<td>

</td>
</tr>
<tr>
<td>UnknownPayment</td>
<td>

</td>
</tr>
<tr>
<td>UnknownPaymentPointer</td>
<td>

</td>
</tr>
<tr>
<td>UnknownPeer</td>
<td>

</td>
</tr>
<tr>
<td>UnknownTransfer</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPaymentState



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>FUNDING</td>
<td>
<p>Will transition to SENDING once payment funds are reserved</p>
</td>
</tr>
<tr>
<td>SENDING</td>
<td>
<p>Paying, will transition to COMPLETED on success</p>
</td>
</tr>
<tr>
<td>COMPLETED</td>
<td>
<p>Successful completion</p>
</td>
</tr>
<tr>
<td>FAILED</td>
<td>
<p>Payment failed</p>
</td>
</tr>
</tbody>
</table>

